const express = require('express');
const { Telegraf, Markup } = require('telegraf');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5001;

// Database (Simple JSON file)
const MESSAGES_FILE = path.join(__dirname, 'messages.json');
const USERS_FILE = path.join(__dirname, 'users.json');

const loadData = (file) => {
    if (!fs.existsSync(file)) return [];
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

// Telegram Bot
const bot = new Telegraf(process.env.BOT_TOKEN);

// Bot Middlewares & State
let authorizedUsers = new Set(loadData(USERS_FILE));

const isAdmin = (ctx, next) => {
    if (authorizedUsers.has(ctx.from.id)) {
        return next();
    }
    ctx.reply('⛔️ Доступ ограничен. Пожалуйста, введите пароль для авторизации.');
};

// Keyboards
const mainKeyboard = () => {
    return Markup.keyboard([
        ['📨 Все заявки', '📊 Личный кабинет'],
        ['🚪 Выйти из профиля']
    ]).resize();
};

const authKeyboard = () => {
    return Markup.removeKeyboard();
};

// Bot Commands
bot.start((ctx) => {
    if (authorizedUsers.has(ctx.from.id)) {
        ctx.reply('✨ Рады видеть вас снова в админ-панели Dredmark!', mainKeyboard());
    } else {
        ctx.reply('👋 Добро пожаловать! Это система управления заявками Dredmark.\n\n🔐 Пожалуйста, введите административный пароль для получения доступа.');
    }
});

bot.on('text', (ctx, next) => {
    if (authorizedUsers.has(ctx.from.id)) return next();

    if (ctx.message.text === process.env.ADMIN_PASSWORD) {
        authorizedUsers.add(ctx.from.id);
        saveData(USERS_FILE, Array.from(authorizedUsers));
        ctx.reply('✅ Авторизация успешна! Теперь вы будете получать уведомления о новых заявках в режиме реального времени.', mainKeyboard());
    } else {
        ctx.reply('❌ Неверный пароль. Попробуйте еще раз.');
    }
});

// Handlers
bot.hears('📨 Все заявки', isAdmin, (ctx) => {
    const messages = loadData(MESSAGES_FILE);
    if (messages.length === 0) {
        return ctx.reply('📭 Список заявок пока пуст.');
    }

    ctx.reply(`🗂 Последние 10 заявок (всего: ${messages.length}):`);
    messages.slice(-10).forEach((msg) => {
        ctx.reply(formatMessage(msg), replyButtons(msg.id));
    });
});

bot.hears('📊 Личный кабинет', isAdmin, (ctx) => {
    const messages = loadData(MESSAGES_FILE);
    const totalRequests = messages.length;
    const lastRequest = messages.length > 0 ? messages[messages.length - 1].date : 'Нет';

    const stats = `👤 *Личный кабинет администратора*\n\n` +
        `📈 *Статистика:*\n` +
        `• Всего заявок: ${totalRequests}\n` +
        `• Последняя заявка: ${lastRequest}\n\n` +
        `ℹ️ Вы будете получать уведомления в этот чат автоматически.`;

    ctx.replyWithMarkdown(stats, mainKeyboard());
});

bot.hears('🚪 Выйти из профиля', isAdmin, (ctx) => {
    authorizedUsers.delete(ctx.from.id);
    saveData(USERS_FILE, Array.from(authorizedUsers));
    ctx.reply('🔓 Вы успешно вышли из профиля. Чтобы вернуться, введите пароль снова.', authKeyboard());
});

// Inline actions
bot.action(/delete_(.+)/, isAdmin, async (ctx) => {
    const msgId = ctx.match[1];
    let messages = loadData(MESSAGES_FILE);
    messages = messages.filter(m => m.id !== msgId);
    saveData(MESSAGES_FILE, messages);
    ctx.editMessageText('🗑 Заявка удалена из базы данных.');
});

const formatMessage = (msg) => {
    return `📋 *Новая заявка #${msg.id.slice(-4)}*\n\n` +
        `👤 *Имя:* ${msg.name}\n` +
        `📞 *Телефон:* \`${msg.tel}\`\n` +
        `💬 *Сообщение:* ${msg.message}\n` +
        `📅 *Дата:* ${msg.date}`;
};

const replyButtons = (id) => {
    return Markup.inlineKeyboard([
        [Markup.button.callback('🗑 Удалить', `delete_${id}`)]
    ]);
};

// API Endpoint for frontend
app.post('/api/contact', async (req, res) => {
    const { name, tel, message } = req.body;

    const newMsg = {
        id: Date.now().toString(),
        name,
        tel,
        message,
        date: new Date().toLocaleString()
    };

    // Save to DB
    const messages = loadData(MESSAGES_FILE);
    messages.push(newMsg);
    saveData(MESSAGES_FILE, messages);

    // Notify Admin
    authorizedUsers.forEach(userId => {
        bot.telegram.sendMessage(userId, `🚀 *НОВАЯ ЗАЯВКА С САЙТА!*\n\n${formatMessage(newMsg)}`, {
            parse_mode: 'Markdown',
            ...replyButtons(newMsg.id)
        }).catch(err => console.error(`Failed to send message to ${userId}:`, err));
    });

    res.status(200).json({ success: true });
});

bot.launch().then(() => {
    console.log('Telegram bot started with Enhanced UI');
}).catch(err => {
    console.error('Failed to start bot:', err);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Graceful stop
process.once('SIGINT', () => {
    bot.stop('SIGINT');
    process.exit();
});
process.once('SIGTERM', () => {
    bot.stop('SIGTERM');
    process.exit();
});
