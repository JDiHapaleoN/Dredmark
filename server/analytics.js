const VISITS_FILE = path.join(__dirname, 'visits.json');

const logVisit = (page) => {
    const visits = loadData(VISITS_FILE);
    const today = new Date().toLocaleDateString();

    if (!visits[today]) {
        visits[today] = { total: 0, pages: {} };
    }

    visits[today].total += 1;
    visits[today].pages[page] = (visits[today].pages[page] || 0) + 1;

    saveData(VISITS_FILE, visits);
};

// API for visit tracking
app.post('/api/visit', (req, res) => {
    const { page } = req.body;
    logVisit(page || '/');
    res.status(200).send('OK');
});

// Daily Report Logic
const sendDailyReport = async () => {
    const visits = loadData(VISITS_FILE);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dateStr = yesterday.toLocaleDateString();

    const dayData = visits[dateStr];
    if (!dayData) return;

    const messages = loadData(MESSAGES_FILE);
    const dayMessages = messages.filter(m => m.date.includes(dateStr));

    let report = `📊 *ОТЧЕТ ЗА ${dateStr}*\n───────────────────\n`;
    report += `👥 Посетителей: *${dayData.total}*\n`;
    report += `📩 Новых заявок: *${dayMessages.length}*\n\n`;
    report += `📍 *Популярные страницы:*\n`;

    Object.entries(dayData.pages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .forEach(([page, count], i) => {
            report += `${i + 1}. \`${page}\`: ${count}\n`;
        });

    authorizedUsers.forEach(userId => {
        bot.telegram.sendMessage(userId, report, { parse_mode: 'Markdown' }).catch(console.error);
    });
};

// Schedule daily report (at 09:00 AM)
setInterval(() => {
    const now = new Date();
    if (now.getHours() === 9 && now.getMinutes() === 0) {
        sendDailyReport();
    }
}, 60000); // Check every minute
