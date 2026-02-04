const express = require('express');
const { Telegraf, Markup } = require('telegraf');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

const app = express();
const port = process.env.PORT || 5001;

// Database (Simple JSON file)
const MESSAGES_FILE = path.join(__dirname, 'messages.json');
const USERS_FILE = path.join(__dirname, 'users.json');
const VISITS_FILE = path.join(__dirname, 'visits.json');

const loadData = (file) => {
    if (!fs.existsSync(file)) return file.endsWith('.json') && !file.includes('messages') && !file.includes('users') ? {} : [];
    try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {
        return [];
    }
};

const saveData = (file, data) => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
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
        ['📉 Статистика', '💾 Экспорт CSV'],
        ['🚪 Выход']
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

    ctx.reply(`📂 *ПОСЛЕДНИЕ ЗАЯВКИ* [${items.length}]\n───────────────────\nНажмите на заявку для просмотра деталей:`, {
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard(buttons)
    });
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
    const stats = {
        total: messages.length,
        new: messages.filter(m => !m.status || m.status === 'new').length,
        processing: messages.filter(m => m.status === 'processing').length,
        contract: messages.filter(m => m.status === 'contract').length,
        shipped: messages.filter(m => m.status === 'shipped').length,
        done: messages.filter(m => m.status === 'done').length,
        refusal: messages.filter(m => m.status === 'refusal').length
    };

    const text = `📊 *ОБЩАЯ СТАТИСТИКА*\n───────────────────\n` +
        `📈 Всего заявок: *${stats.total}*\n\n` +
        `${statusIcons.new} Новых: *${stats.new}*\n` +
        `${statusIcons.processing} В работе: *${stats.processing}*\n` +
        `${statusIcons.contract} Договор: *${stats.contract}*\n` +
        `${statusIcons.shipped} Отгружено: *${stats.shipped}*\n` +
        `${statusIcons.done} Завершено: *${stats.done}*\n` +
        `${statusIcons.refusal} Отказ: *${stats.refusal}*\n\n` +
        `📅 Сводный отчет каждый день в 09:00.`;

    ctx.replyWithMarkdown(text, mainDashboard());
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
        ? `\n───────────────────\n📌 *ИСТОРИЯ КЛИЕНТА* (${history.length})\n` +
        history.slice(-5).map(h => `▫️ ${h.date.split(',')[0]}: ${statusIcons[h.status || 'new']}`).join('\n')
        : '';

    const escapeMd = (text) => (text || '').replace(/([_*\[`])/g, '\\$1');
    const status = msg.status || 'new';

    return `📄 *ДЕТАЛИ ЗАЯВКИ #${msg.id.slice(-4)}*\n` +
        `───────────────────\n` +
        `👤 *Имя:* ${escapeMd(msg.name)}\n` +
        `📞 *Телефон:* ${msg.tel}\n` +
        `📍 *Страница:* \`${msg.source || '/'}\`\n` +
        `🚥 *Статус:* ${statusIcons[status]} *${statusLabels[status]}*\n` +
        `📅 *Дата:* ${msg.date}\n\n` +
        `✉️ *Сообщение:* \n_${escapeMd(msg.message)}_\n\n` +
        `💡 _(Нажмите на номер телефона, чтобы позвонить)_` +
        historyText;
};

const replyButtons = (id, tel, status) => {
    const cleanTel = tel ? tel.replace(/\D/g, '') : '';
    const buttons = [];

    const actionRow = [];
    if (cleanTel) actionRow.push(Markup.button.url('💬 TG', `https://t.me/+${cleanTel}`));
    actionRow.push(Markup.button.callback('🗑 Удалить', `delete_${id}`));
    buttons.push(actionRow);

    const statusRow1 = [];
    if (status !== 'processing') statusRow1.push(Markup.button.callback('⏳ В работу', `set_status_processing_${id}`));
    if (status !== 'contract') statusRow1.push(Markup.button.callback('🤝 Договор', `set_status_contract_${id}`));
    buttons.push(statusRow1);

    const statusRow2 = [];
    if (status !== 'shipped') statusRow2.push(Markup.button.callback('🚢 Отгрузка', `set_status_shipped_${id}`));
    if (status !== 'done') statusRow2.push(Markup.button.callback('✅ Готово', `set_status_done_${id}`));
    if (status !== 'refusal') statusRow2.push(Markup.button.callback('❌ Отказ', `set_status_refusal_${id}`));
    buttons.push(statusRow2);

    buttons.push([Markup.button.callback('🔙 Назад к списку', 'back_to_list')]);
    return Markup.inlineKeyboard(buttons);
};

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
    const { name, tel, message, source } = req.body;
    const newMsg = {
        id: Date.now().toString(),
        name, tel, message, source,
        status: 'new',
        date: new Date().toLocaleString()
    };

    const messages = loadData(MESSAGES_FILE);
    messages.push(newMsg);
    saveData(MESSAGES_FILE, messages);

    authorizedUsers.forEach(userId => {
        bot.telegram.sendMessage(userId, `🚀 *НОВАЯ ЗАЯВКА С САЙТА!*\n\n${formatMessage(newMsg)}`, {
            parse_mode: 'Markdown',
            ...replyButtons(newMsg.id, newMsg.tel, 'new')
        });
    });
    res.status(200).json({ success: true });
});

bot.catch((err) => console.error('Bot Error:', err));
bot.launch().then(() => console.log('✅ Dredmark CRM Dashboard Started'));
app.listen(port, () => console.log(`Server running on port ${port}`));

process.once('SIGINT', () => (bot.stop('SIGINT'), process.exit()));
process.once('SIGTERM', () => (bot.stop('SIGTERM'), process.exit()));
