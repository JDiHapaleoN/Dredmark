const express = require('express');
const { Telegraf, Markup } = require('telegraf');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const archiver = require('archiver');
const si = require('systeminformation');

const app = express();
const port = process.env.PORT || 5001;

// Database (Simple JSON file)
const MESSAGES_FILE = path.join(__dirname, 'messages.json');
const USERS_FILE = path.join(__dirname, 'users.json');
const VISITS_FILE = path.join(__dirname, 'visits.json');

const loadData = (file, defaultValue = []) => {
    if (!fs.existsSync(file)) {
        if (!fs.existsSync(path.dirname(file))) {
            fs.mkdirSync(path.dirname(file), { recursive: true });
        }
        fs.writeFileSync(file, JSON.stringify(defaultValue, null, 2));
        return defaultValue;
    }
    try {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        return data;
    } catch (e) {
        console.error(`Error loading ${file}:`, e);
        return defaultValue;
    }
};

const saveData = (file, data) => {
    const tempFile = `${file}.tmp`;
    try {
        fs.writeFileSync(tempFile, JSON.stringify(data, null, 2));
        fs.renameSync(tempFile, file);
    } catch (e) {
        console.error(`Error saving ${file}:`, e);
        if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
    }
};

// Middleware
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        // or if the origin matches our environment variable (with wildcards or exact match)
        const allowedOrigin = process.env.CORS_ORIGIN || '*';
        if (!origin || allowedOrigin === '*' || origin === allowedOrigin || allowedOrigin.split(',').includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Visit Logging
const logVisit = (page) => {
    let visits = loadData(VISITS_FILE);
    if (Array.isArray(visits)) visits = {}; // Fix for initial empty state if it was []
    const today = new Date().toLocaleDateString();

    if (!visits[today]) {
        visits[today] = { total: 0, pages: {} };
    }

    visits[today].total += 1;
    visits[today].pages[page] = (visits[today].pages[page] || 0) + 1;

    saveData(VISITS_FILE, visits);
};

app.post('/api/visit', (req, res) => {
    const { page } = req.body;
    logVisit(page || '/');
    res.status(200).send('OK');
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ 
        status: 'UP', 
        time: new Date().toISOString(),
        bot: bot.token ? 'Initialized' : 'Missing Token'
    });
});

// Telegram Bot
const bot = new Telegraf(process.env.BOT_TOKEN);

// Bot Middlewares & State
let authorizedUsers = new Set(loadData(USERS_FILE));
let adminStates = {};

const isAdmin = (ctx, next) => {
    if (authorizedUsers.has(ctx.from.id)) return next();
    ctx.reply('⛔️ *ДОСТУП ОГРАНИЧЕН*\n\nПожалуйста, введите пароль администратора для входа в систему.', { parse_mode: 'Markdown' });
};

// Keyboards
const mainDashboard = () => {
    return Markup.keyboard([
        ['📑 Список заявок', '🔍 Поиск'],
        ['📉 Статистика', '⚡️ Live-монитор'],
        ['📦 Бэкап базы', '🖥 Состояние VPS'],
        ['💾 Экспорт CSV', '🚪 Выход']
    ]).resize();
};

const statusIcons = {
    new: '🆕',
    processing: '⏳',
    contract: '🤝',
    shipped: '🚢',
    done: '✅',
    refusal: '❌'
};

const statusLabels = {
    new: 'Новая',
    processing: 'В обработке',
    contract: 'Договор',
    shipped: 'Отгружено',
    done: 'Завершена',
    refusal: 'Отказ'
};

// Bot Commands
bot.start((ctx) => {
    const userId = ctx.from.id;
    if (authorizedUsers.has(userId)) {
        ctx.reply('🏦 *DREDMARK CRM*\n───────────────────\nДобро пожаловать в панель управления. Выберите раздел ниже для начала работы.', {
            parse_mode: 'Markdown',
            ...mainDashboard()
        });
    } else {
        ctx.reply('👋 *ПРИВЕТСТВУЕМ!*\n───────────────────\nЭто закрытая система управления заявками *Dredmark*.\n\n🔐 Для доступа введите пароль:', { parse_mode: 'Markdown' });
    }
});

// Admin Input Handler
bot.on('text', async (ctx, next) => {
    const userId = ctx.from.id;

    if (!authorizedUsers.has(userId)) {
        if (ctx.message.text === process.env.ADMIN_PASSWORD) {
            authorizedUsers.add(userId);
            saveData(USERS_FILE, Array.from(authorizedUsers));
            return ctx.reply('✅ *АВТОРИЗАЦИЯ УСПЕШНА!*\n───────────────────\nТеперь вы имеете полный доступ к CRM и будете получать уведомления о новых заявках.', {
                parse_mode: 'Markdown',
                ...mainDashboard()
            });
        } else {
            return ctx.reply('❌ *ОШИБКА*\nНеверный пароль. Попробуйте снова.');
        }
    }

    if (adminStates[userId] === 'searching') {
        const query = ctx.message.text.toLowerCase();
        const messages = loadData(MESSAGES_FILE);
        const results = messages.filter(m =>
            (m.name || '').toLowerCase().includes(query) ||
            (m.tel || '').includes(query)
        ).slice(-15);

        if (results.length === 0) {
            ctx.reply('🔎 *ПОИСК*\n───────────────────\nПо запросу nothing ничего не найдено. Попробуйте другое имя или номер.', { parse_mode: 'Markdown' });
        } else {
            ctx.reply(`🔎 *РЕЗУЛЬТАТЫ ПОИСКА* (${results.length})\n───────────────────\nВыберите клиента из списка ниже:`, {
                parse_mode: 'Markdown',
                ...Markup.inlineKeyboard(results.map(msg => [
                    Markup.button.callback(`${statusIcons[msg.status || 'new']} ${msg.name}`, `view_${msg.id}`)
                ]))
            });
        }
        delete adminStates[userId];
        return;
    }

    return next();
});

// Handlers
bot.hears('📑 Список заявок', isAdmin, (ctx) => {
    const messages = loadData(MESSAGES_FILE);
    if (messages.length === 0) return ctx.reply('📭 Список заявок пока пуст.');

    const limit = 25;
    const items = messages.slice(-limit).reverse();
    const buttons = items.map(msg => [
        Markup.button.callback(`${statusIcons[msg.status || 'new']} ${msg.name} | ${msg.date.split(',')[0]}`, `view_${msg.id}`)
    ]);

    // Add filter buttons - shorter labels for mobile
    const filterButtons = [
        Markup.button.callback('Все', 'filter_all'),
        Markup.button.callback('🆕 Новые', 'filter_new'),
        Markup.button.callback('⏳ В работе', 'filter_processing'),
        Markup.button.callback('✅ Готово', 'filter_completed')
    ];

    ctx.reply(`📂 *ПОСЛЕДНИЕ ЗАЯВКИ* [${items.length}]\n───────────────────\nНажмите на заявку для просмотра деталей:`, {
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard([filterButtons, ...buttons])
    });
});

// Filter actions
bot.action(/filter_(.+)/, isAdmin, (ctx) => {
    const filter = ctx.match[1];
    const messages = loadData(MESSAGES_FILE);

    let filtered = messages;
    let filterLabel = 'Все';

    if (filter === 'new') {
        filtered = messages.filter(m => !m.status || m.status === 'new');
        filterLabel = '🆕 Новые';
    } else if (filter === 'processing') {
        filtered = messages.filter(m => m.status === 'processing' || m.status === 'contract' || m.status === 'shipped');
        filterLabel = '⏳ В работе';
    } else if (filter === 'completed') {
        filtered = messages.filter(m => m.status === 'done' || m.status === 'refusal');
        filterLabel = '✅ Готово';
    }

    const limit = 25;
    const items = filtered.slice(-limit).reverse();
    const buttons = items.map(msg => [
        Markup.button.callback(`${statusIcons[msg.status || 'new']} ${msg.name} | ${msg.date.split(',')[0]}`, `view_${msg.id}`)
    ]);

    const filterButtons = [
        Markup.button.callback('Все', 'filter_all'),
        Markup.button.callback('🆕 Новые', 'filter_new'),
        Markup.button.callback('⏳ В работе', 'filter_processing'),
        Markup.button.callback('✅ Готово', 'filter_completed')
    ];

    ctx.editMessageText(`📂 *${filterLabel.toUpperCase()}* [${items.length}]\n───────────────────\nНажмите на заявку для просмотра деталей:`, {
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard([filterButtons, ...buttons])
    });
    ctx.answerCbQuery();
});

bot.hears('🔍 Поиск', isAdmin, (ctx) => {
    adminStates[ctx.from.id] = 'searching';
    ctx.reply('⌨️ *ПОИСК*\n───────────────────\nВведите имя или номер телефона клиента для поиска в базе:', { parse_mode: 'Markdown' });
});

bot.hears('💾 Экспорт CSV', isAdmin, async (ctx) => {
    const messages = loadData(MESSAGES_FILE);
    if (messages.length === 0) return ctx.reply('📭 База данных пуста.');

    let csv = 'ID,Name,Phone,Message,Date,Status,Source\n';
    messages.forEach(m => {
        csv += `"${m.id}","${m.name}","${m.tel}","${m.message.replace(/"/g, '""')}","${m.date}","${m.status || 'new'}","${m.source || '/'}"\n`;
    });

    const filePath = path.join(__dirname, 'requests_export.csv');
    fs.writeFileSync(filePath, csv, 'utf8');

    await ctx.replyWithDocument({ source: filePath, filename: `Dredmark_Report_${new Date().toLocaleDateString()}.csv` }, {
        caption: '📊 *ВЫГРУЗКА БАЗЫ ДАННЫХ*\nПолная история заявок в формате CSV.',
        parse_mode: 'Markdown'
    });
    fs.unlinkSync(filePath);
});

bot.hears('📉 Статистика', isAdmin, (ctx) => {
    const messages = loadData(MESSAGES_FILE);
    const visits = loadData(VISITS_FILE, {});

    const today = new Date().toLocaleDateString();
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toLocaleDateString();

    const todayVisits = (visits[today] && visits[today].total) || 0;
    const yesterdayVisits = (visits[yesterday] && visits[yesterday].total) || 0;

    let trendVisits = '';
    if (yesterdayVisits > 0) {
        const diff = ((todayVisits - yesterdayVisits) / yesterdayVisits) * 100;
        trendVisits = diff >= 0 ? ` (+${diff.toFixed(1)}% 📈)` : ` (${diff.toFixed(1)}% 📉)`;
    }

    const stats = {
        total: messages.length,
        new: messages.filter(m => !m.status || m.status === 'new').length,
        processing: messages.filter(m => m.status === 'processing').length,
        contract: messages.filter(m => m.status === 'contract').length,
        shipped: messages.filter(m => m.status === 'shipped').length,
        done: messages.filter(m => m.status === 'done').length,
        refusal: messages.filter(m => m.status === 'refusal').length
    };

    const percent = (count, total) => total > 0 ? Math.round((count / total) * 100) : 0;

    const sources = {};
    messages.forEach(m => {
        const src = m.source || '/';
        sources[src] = (sources[src] || 0) + 1;
    });

    const topSources = Object.entries(sources)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    let sourceStats = '';
    if (topSources.length > 0) {
        sourceStats = `\n\n*📍 Источники заявок*\n`;
        topSources.forEach(([page, count], i) => {
            const pct = percent(count, stats.total);
            sourceStats += `${i + 1}. \`${page}\` — ${count} (${pct}%)\n`;
        });
    }

    const text = `📊 *СТАТИСТИКА*\n\n` +
        `Всего заявок: *${stats.total}*\n` +
        `Визиты сегодня: *${todayVisits}*${trendVisits}\n\n` +
        `${statusIcons.new} Новые — *${stats.new}* (${percent(stats.new, stats.total)}%)\n` +
        `${statusIcons.processing} В обработке — *${stats.processing}* (${percent(stats.processing, stats.total)}%)\n` +
        `${statusIcons.contract} Договор — *${stats.contract}* (${percent(stats.contract, stats.total)}%)\n` +
        `${statusIcons.shipped} Отгружено — *${stats.shipped}* (${percent(stats.shipped, stats.total)}%)\n` +
        `${statusIcons.done} Завершено — *${stats.done}* (${percent(stats.done, stats.total)}%)\n` +
        `${statusIcons.refusal} Отказ — *${stats.refusal}* (${percent(stats.refusal, stats.total)}%)` +
        sourceStats +
        `\n\n📅 На текущий момент: ${new Date().toLocaleString()}`;

    ctx.replyWithMarkdown(text, mainDashboard());
});

bot.hears('⚡️ Live-монитор', isAdmin, async (ctx) => {
    const messages = loadData(MESSAGES_FILE);
    const last10 = messages.slice(-10).reverse();

    if (last10.length === 0) return ctx.reply('Журнал пуст.');

    let text = `⚡️ *ПОСЛЕДНЯЯ АКТИВНОСТЬ (Top 10)*\n───────────────────\n\n`;
    last10.forEach((m, i) => {
        text += `${i + 1}. *${m.name}* (${m.date.split(',')[1].trim()}) — ${statusIcons[m.status || 'new']}\n`;
    });

    ctx.replyWithMarkdown(text);
});

bot.hears('📦 Бэкап базы', isAdmin, async (ctx) => {
    const waitMsg = await ctx.reply('💿 Формирование архива базы данных...');

    try {
        const zipFile = path.join(__dirname, `backup_${Date.now()}.zip`);
        const output = fs.createWriteStream(zipFile);
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', async () => {
            await ctx.deleteMessage(waitMsg.message_id);
            await ctx.replyWithDocument({ source: zipFile, filename: path.basename(zipFile) }, {
                caption: '🔐 *ПОЛНЫЙ БЭКАП БАЗЫ*\nСодержит все JSON файлы системы.',
                parse_mode: 'Markdown'
            });
            fs.unlinkSync(zipFile);
        });

        archive.on('error', (err) => { throw err; });
        archive.pipe(output);

        // Add all JSON files
        fs.readdirSync(__dirname).forEach(file => {
            if (file.endsWith('.json')) {
                archive.file(path.join(__dirname, file), { name: file });
            }
        });

        await archive.finalize();
    } catch (e) {
        ctx.reply('❌ Ошибка при создании бэкапа: ' + e.message);
    }
});

bot.hears('🖥 Состояние VPS', isAdmin, async (ctx) => {
    const waitMsg = await ctx.reply('🔍 Сбор данных системы...');

    try {
        const [cpu, mem, load, disk] = await Promise.all([
            si.cpu(),
            si.mem(),
            si.currentLoad(),
            si.fsSize()
        ]);

        const totalDisk = disk[0].size;
        const usedDisk = disk[0].used;
        const diskPercent = ((usedDisk / totalDisk) * 100).toFixed(1);

        const memUsed = ((mem.active / mem.total) * 100).toFixed(1);

        const text = `🖥 *СОСТОЯНИЕ СЕРВЕРА*\n───────────────────\n\n` +
            `🔹 **CPU:** ${cpu.manufacturer} ${cpu.brand}\n` +
            `🔹 **Загрузка:** ${load.currentLoad.toFixed(1)}%\n` +
            `🔹 **Memory:** ${memUsed}% (${(mem.active / 1024 / 1024 / 1024).toFixed(1)}GB / ${(mem.total / 1024 / 1024 / 1024).toFixed(1)}GB)\n` +
            `🔹 **Disk:** ${diskPercent}% (${(usedDisk / 1024 / 1024 / 1024).toFixed(1)}GB / ${(totalDisk / 1024 / 1024 / 1024).toFixed(1)}GB)\n` +
            `🔹 **Uptime:** ${Math.floor(si.time().uptime / 3600)} часов\n\n` +
            `✅ Система работает стабильно.`;

        await ctx.deleteMessage(waitMsg.message_id);
        ctx.replyWithMarkdown(text);
    } catch (e) {
        ctx.reply('❌ Ошибка сбора статистики: ' + e.message);
    }
});

bot.hears('🚪 Выход', isAdmin, (ctx) => {
    authorizedUsers.delete(ctx.from.id);
    saveData(USERS_FILE, Array.from(authorizedUsers));
    ctx.reply('🔓 *СЕССИЯ ЗАВЕРШЕНА*\nВы вышли из системы.', Markup.removeKeyboard());
});

// Inline actions
bot.action(/view_(.+)/, isAdmin, async (ctx) => {
    const msgId = ctx.match[1];
    const messages = loadData(MESSAGES_FILE);
    const msg = messages.find(m => m.id === msgId);
    if (!msg) return ctx.answerCbQuery('❌ Заявка не найдена');

    ctx.editMessageText(formatMessage(msg), {
        parse_mode: 'Markdown',
        ...replyButtons(msg.id, msg.tel, msg.status)
    });
    ctx.answerCbQuery();
});

bot.action(/set_status_(.+)_(.+)/, isAdmin, async (ctx) => {
    const status = ctx.match[1];
    const msgId = ctx.match[2];
    let messages = loadData(MESSAGES_FILE);
    const msgIndex = messages.findIndex(m => m.id === msgId);

    if (msgIndex !== -1) {
        messages[msgIndex].status = status;
        saveData(MESSAGES_FILE, messages);
        ctx.answerCbQuery(`Статус: ${statusLabels[status]}`);
        ctx.editMessageText(formatMessage(messages[msgIndex]), {
            parse_mode: 'Markdown',
            ...replyButtons(msgId, messages[msgIndex].tel, status)
        });
    }
});

// Email Transporter (Nodemailer)
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

bot.action(/delete_(.+)/, isAdmin, async (ctx) => {
    const msgId = ctx.match[1];
    let messages = loadData(MESSAGES_FILE);
    messages = messages.filter(m => m.id !== msgId);
    saveData(MESSAGES_FILE, messages);
    ctx.answerCbQuery('🗑 Удалено');
    ctx.editMessageText('🗑 *ЗАЯВКА УДАЛЕНА*\nДанные стерты из базы данных.', {
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard([[Markup.button.callback('🔙 К списку', 'back_to_list')]])
    });
});

bot.action(/reply_(.+)/, isAdmin, async (ctx) => {
    const msgId = ctx.match[1];
    const messages = loadData(MESSAGES_FILE);
    const msg = messages.find(m => m.id === msgId);
    if (!msg) return ctx.answerCbQuery('❌ Заявка не найдена');

    const templates = [
        Markup.button.callback('Получили заявку ✅', `template_received_${msgId}`),
        Markup.button.callback('Скоро свяжемся 📞', `template_contact_${msgId}`),
        Markup.button.callback('Нужно уточнение ❓', `template_clarify_${msgId}`),
        Markup.button.callback('🔙 Назад', `view_${msgId}`)
    ];

    const langLabel = msg.lang === 'en' ? '🇬🇧 English' : msg.lang === 'uz' ? '🇺🇿 O\'zbek' : '🇷🇺 Русский';

    ctx.editMessageText(
        `💬 *ВЫБЕРИТЕ ШАБЛОН ОТВЕТА*\n───────────────────\n\n` +
        `📱 **Клиент:** ${msg.name}\n` +
        `📞 **Телефон:** ${msg.tel}\n` +
        `🌍 **Язык:** ${langLabel}\n\n` +
        `Выберите готовый шаблон:`,
        {
            parse_mode: 'Markdown',
            ...Markup.inlineKeyboard([templates.slice(0, 2), templates.slice(2)])
        }
    );
    ctx.answerCbQuery();
});

bot.action(/template_(.+)_(.+)/, isAdmin, async (ctx) => {
    const templateType = ctx.match[1];
    const msgId = ctx.match[2];
    const messages = loadData(MESSAGES_FILE);
    const msg = messages.find(m => m.id === msgId);
    if (!msg) return ctx.answerCbQuery('❌ Заявка не найдена');

    const lang = msg.lang || 'ru';

    // Multilingual templates
    const templates = {
        received: {
            ru: `Здравствуйте! Мы получили вашу заявку на сайте DREDMARK. Наш специалист свяжется с вами в ближайшее время для консультации. С уважением, команда DREDMARK.`,
            en: `Hello! We have received your request on the DREDMARK website. Our specialist will contact you shortly for consultation. Best regards, DREDMARK team.`,
            uz: `Salom! Biz DREDMARK saytidan so'rovingizni qabul qildik. Mutaxassisimiz yaqin orada maslahat uchun siz bilan bog'lanadi. Hurmat bilan, DREDMARK jamoasi.`
        },
        contact: {
            ru: `Добрый день! Благодарим за обращение в DREDMARK. Мы скоро свяжемся с вами для обсуждения деталей. Хорошего дня!`,
            en: `Good day! Thank you for contacting DREDMARK. We will get in touch with you soon to discuss the details. Have a great day!`,
            uz: `Xayrli kun! DREDMARK ga murojaat qilganingiz uchun tashakkur. Tafsilotlarni muhokama qilish uchun tez orada siz bilan bog'lanamiz. Yaxshi kun tilaymiz!`
        },
        clarify: {
            ru: `Здравствуйте! Для подготовки коммерческого предложения нам нужно уточнить несколько деталей. Пожалуйста, ответьте на этот номер или напишите в WhatsApp: +998974075793`,
            en: `Hello! To prepare a commercial offer, we need to clarify a few details. Please reply to this number or message us on WhatsApp: +998974075793`,
            uz: `Salom! Tijorat taklifini tayyorlash uchun bir nechta tafsilotlarni aniqlashtir ishimiz kerak. Iltimos, ushbu raqamga javob bering yoki WhatsApp orqali yozing: +998974075793`
        }
    };

    const template = templates[templateType][lang];
    const cleanTel = msg.tel.replace(/\D/g, '');
    const whatsappLink = `https://wa.me/${cleanTel}?text=${encodeURIComponent(template)}`;
    const telegramLink = `https://t.me/+${cleanTel}`;

    ctx.answerCbQuery('✅ Выберите способ отправки');
    ctx.editMessageText(
        `✅ *ШАБЛОН ГОТОВ*\n───────────────────\n\n` +
        `📱 **Клиент:** ${msg.name}\n` +
        `📞 **Телефон:** ${msg.tel}\n` +
        `🌍 **Язык:** ${lang === 'en' ? '🇬🇧 English' : lang === 'uz' ? '🇺🇿 O\'zbek' : '🇷🇺 Русский'}\n\n` +
        `📝 **Текст сообщения:**\n_${template}_\n\n` +
        `👇 Выберите способ отправки:`,
        {
            parse_mode: 'Markdown',
            ...Markup.inlineKeyboard([
                [Markup.button.url('📱 WhatsApp', whatsappLink)],
                [Markup.button.url('✈️ Telegram', telegramLink)],
                [Markup.button.callback('🔙 К заявке', `view_${msgId}`)]
            ])
        }
    );
});

bot.action('back_to_list', isAdmin, (ctx) => {
    const messages = loadData(MESSAGES_FILE);
    const limit = 25;
    const items = messages.slice(-limit).reverse();
    const buttons = items.map(msg => [
        Markup.button.callback(`${statusIcons[msg.status || 'new']} ${msg.name} | ${msg.date.split(',')[0]}`, `view_${msg.id}`)
    ]);
    ctx.editMessageText(`📂 *ПОСЛЕДНИЕ ЗАЯВКИ*\n───────────────────\nВыберите клиента:`, {
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard(buttons)
    });
    ctx.answerCbQuery();
});

const formatMessage = (msg) => {
    const messages = loadData(MESSAGES_FILE);
    const history = messages.filter(m => m.tel === msg.tel && m.id !== msg.id);
    const historyText = history.length > 0
        ? `\n📌 *История клиента:* ${history.length} ${history.length === 1 ? 'заявка' : 'заявки'}\n` +
        history.slice(-3).map(h => `  • ${h.date.split(',')[0]} — ${statusIcons[h.status || 'new']} ${statusLabels[h.status || 'new']}`).join('\n')
        : '';

    const escapeMd = (text) => (text || '').replace(/([_*\[`])/g, '\\$1');
    const status = msg.status || 'new';

    return `📄 *ЗАЯВКА #${msg.id.slice(-4)}*\n\n` +
        `👤 *Имя:* ${escapeMd(msg.name)}\n` +
        `📞 *Телефон:* ${msg.tel}\n` +
        `📧 *Email:* ${msg.email || 'не указан'}\n` +
        `📍 *Источник:* \`${msg.source || '/'}\`\n` +
        `📅 *Дата:* ${msg.date}\n\n` +
        `🚥 *Статус:* ${statusIcons[status]} *${statusLabels[status]}*\n\n` +
        (msg.projectType ? `🏗 *Тип проекта:* ${escapeMd(msg.projectType)}\n` : '') +
        (msg.capacity ? `⚙️ *Производительность:* ${escapeMd(msg.capacity)}\n` : '') +
        `💬 *Сообщение:*\n_${escapeMd(msg.message)}_` +
        historyText;
};

const replyButtons = (id, tel, status) => {
    const cleanTel = tel ? tel.replace(/\D/g, '') : '';
    const buttons = [];

    // Status buttons - show only logical next steps
    const statusRow = [];
    if (!status || status === 'new') {
        statusRow.push(Markup.button.callback('⏳ В работу', `set_status_processing_${id}`));
        statusRow.push(Markup.button.callback('❌ Отказ', `set_status_refusal_${id}`));
    } else if (status === 'processing') {
        statusRow.push(Markup.button.callback('🤝 Договор', `set_status_contract_${id}`));
        statusRow.push(Markup.button.callback('❌ Отказ', `set_status_refusal_${id}`));
    } else if (status === 'contract') {
        statusRow.push(Markup.button.callback('🚢 Отгружено', `set_status_shipped_${id}`));
        statusRow.push(Markup.button.callback('❌ Отказ', `set_status_refusal_${id}`));
    } else if (status === 'shipped') {
        statusRow.push(Markup.button.callback('✅ Готово', `set_status_done_${id}`));
    }

    if (statusRow.length > 0) buttons.push(statusRow);

    // Action buttons - only essential ones
    const actionRow = [];
    if (cleanTel) actionRow.push(Markup.button.url('💬 Telegram', `https://t.me/+${cleanTel}`));
    actionRow.push(Markup.button.callback('🗑 Удалить', `delete_${id}`));
    actionRow.push(Markup.button.callback('💬 Ответить...', `reply_${id}`));
    if (actionRow.length > 0) buttons.push(actionRow);

    // Navigation
    buttons.push([Markup.button.callback('🔙 К списку', 'back_to_list')]);

    return Markup.inlineKeyboard(buttons);
};

// Stale Request Reminders (9:00 daily)
cron.schedule('0 9 * * *', async () => {
    const messages = loadData(MESSAGES_FILE);
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    const staleRequests = messages.filter(m => {
        if (m.status === 'done' || m.status === 'refusal') return false;
        const msgDate = new Date(m.date);
        return msgDate < threeDaysAgo;
    });

    if (staleRequests.length > 0) {
        let reminder = `⏰ *НАПОМИНАНИЕ*\n───────────────────\n`;
        reminder += `У вас ${staleRequests.length} заявок без изменений более 3 дней:\n\n`;

        staleRequests.slice(0, 10).forEach((m, i) => {
            const daysSince = Math.floor((new Date() - new Date(m.date)) / (1000 * 60 * 60 * 24));
            reminder += `${i + 1}. ${statusIcons[m.status || 'new']} ${m.name} (${daysSince} дней)\n`;
        });

        reminder += `\n💡 Рекомендуем связаться с клиентами.`;

        authorizedUsers.forEach(userId => {
            bot.telegram.sendMessage(userId, reminder, { parse_mode: 'Markdown' }).catch(console.error);
        });
    }
});

// Daily Report
cron.schedule('0 9 * * *', async () => {
    const visits = loadData(VISITS_FILE);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dateStr = yesterday.toLocaleDateString();

    const dayData = visits[dateStr];
    const messages = loadData(MESSAGES_FILE);
    const dayMessages = messages.filter(m => m.date.includes(dateStr));
    const pendingTotal = messages.filter(m => !m.status || m.status === 'new').length;

    let report = `☀️ *ДОБРОЕ УТРО!*\n` +
        `🗓 Отчет за: *${dateStr}*\n───────────────────\n`;
    report += `👥 Посетителей: *${dayData ? dayData.total : 0}*\n`;
    report += `📩 Заявок вчера: *${dayMessages.length}*\n`;
    report += `⏳ Всего новых в базе: *${pendingTotal}*\n\n`;

    if (dayData && dayData.pages) {
        report += `📍 *Популярные страницы:*\n`;
        Object.entries(dayData.pages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .forEach(([page, count], i) => {
                report += `${i + 1}. \`${page}\`: ${count}\n`;
            });
    }

    authorizedUsers.forEach(userId => {
        bot.telegram.sendMessage(userId, report, { parse_mode: 'Markdown' }).catch(console.error);
    });
});

// API Endpoint
app.post('/api/contact', async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ success: false, error: "Empty request body" });
    }

    const { name, tel, email, message, source, projectType, capacity } = req.body;
    const lang = req.body.lang || req.body.lng || 'ru';

    const newMsg = {
        id: Date.now().toString(),
        name: name || 'Anonymous',
        tel: tel || 'Not provided',
        email: email || '',
        projectType: projectType || '',
        capacity: capacity || '',
        message: message || '',
        source: source || '/',
        status: 'new',
        date: new Date().toLocaleString()
    };

    const messages = loadData(MESSAGES_FILE);
    messages.push(newMsg);
    saveData(MESSAGES_FILE, messages);

    // Send Telegram Notification
    authorizedUsers.forEach(userId => {
        bot.telegram.sendMessage(userId, `🚀 *НОВАЯ ЗАЯВКА С САЙТА!*\n\n${formatMessage(newMsg)}`, {
            parse_mode: 'Markdown',
            ...replyButtons(newMsg.id, newMsg.tel, 'new')
        }).catch(err => console.error('Telegram Notify Error:', err));
    });

    // Send Auto-Reply Email to Client
    if (email && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const emailTemplates = {
            ru: {
                subject: "Спасибо за ваше обращение — DREDMARK",
                header: `Здравствуйте, ${name || 'клиент'}!`,
                body: "Мы получили вашу заявку на сайте <b>Dredmark</b>.<br>Наш специалист свяжется с вами в самое ближайшее время для консультации на русском языке.",
                footer: "Это автоматическое уведомление. Пожалуйста, не отвечайте на него.<br>С уважением, команда DREDMARK."
            },
            en: {
                subject: "Thank you for your request — DREDMARK",
                header: `Hello, ${name || 'customer'}!`,
                body: "We have received your request on the <b>Dredmark</b> website.<br>Our specialist will contact you shortly to provide a consultation in English.",
                footer: "This is an automated notification. Please do not reply to it.<br>Regards, The DREDMARK Team."
            },
            uz: {
                subject: "Murojaatingiz uchun tashakkur — DREDMARK",
                header: `Salom, ${name || 'mijoz'}!`,
                body: "Biz sizning <b>Dredmark</b> saytidagi murojaatingizni qabul qildik.<br>Mutaxassisimiz yaqin orada siz bilan bog'lanadi va o'zbek tilida maslahat beradi.",
                footer: "Bu avtomatik xabar. Iltimos, unga javob bermang.<br>Hurmat bilan, DREDMARK jamoasi."
            }
        };

        const t = emailTemplates[lang] || emailTemplates.ru;

        const mailOptions = {
            from: `"DREDMARK Official" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: t.subject,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #0072ff;">${t.header}</h2>
                    <p>${t.body}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 12px; color: #666;">${t.footer}</p>
                </div>
            `
        };

        transporter.sendMail(mailOptions).catch(err => console.error('Email Error:', err));
    }

    // Send Notification Email to Admin (Dredmark Team)
    if (process.env.EMAIL_RECEIVER && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const adminMailOptions = {
            from: `"DREDMARK Site" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER,
            subject: `Новая заявка: ${name || 'Без имени'}`,
            text: `Имя: ${name}\nТелефон: ${tel}\nEmail: ${email || 'не указан'}\nТип проекта: ${projectType || 'не указан'}\nПроизводительность: ${capacity || 'не указана'}\nИсточник: ${source}\nЯзык: ${lang}\n\nСообщение:\n${message}`
        };
        transporter.sendMail(adminMailOptions).catch(err => console.error('Admin Email Error:', err));
    }

    res.status(200).json({ success: true });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('SERVER ERROR:', err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
});

bot.catch((err) => {
    console.error('TELEGRAM BOT ERROR:', err);
});
bot.launch().then(() => console.log('✅ Dredmark CRM Dashboard Started'));
app.listen(port, () => console.log(`Server running on port ${port}`));

process.once('SIGINT', () => (bot.stop('SIGINT'), process.exit()));
process.once('SIGTERM', () => (bot.stop('SIGTERM'), process.exit()));
