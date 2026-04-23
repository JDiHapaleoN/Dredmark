# Инструкция по деплою backend-сервера и Telegram-бота на VPS (Ubuntu/Debian)

Данная инструкция предполагает, что у вас есть доступ к VPS по SSH, исходный код загружен на сервер, а файл `.env` с ключами заполнен и находится в папке `server/`.

### 1. Подготовка сервера и установка Node.js
Если на сервере еще не установлены Node.js и npm, выполните следующие команды:
```bash
# Обновление пакетов
sudo apt update && sudo apt upgrade -y

# Установка curl
sudo apt install curl -y

# Установка Node.js (рекомендуется 20.x)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Проверка установки
node -v
npm -v
```

### 2. Подготовка проекта
Перейдите в директорию с файлами сервера на вашем VPS:
```bash
# Пример: cd /var/www/dredmark/server
cd /путь/к/папке/server
```

Установите все зависимости проекта:
```bash
npm install
```

### 3. Настройка менеджера процессов PM2
Автоматизируем фоновую работу и автозапуск бота с помощью PM2:
```bash
# Глобальная установка PM2
sudo npm install -g pm2

# Запуск приложения
pm2 start index.js --name "dredmark-api-bot"

# Сохранение текущих процессов
pm2 save

# Настройка автозапуска при ребуте сервера
pm2 startup
```
*Внимание: после выполнения `pm2 startup` в консоли появится персональная команда для вашего сервера. Скопируйте её и выполните, чтобы закрепить автозапуск.*

### 4. Настройка Nginx (Опционально, для API)
Если к backend-серверу (API) обращается Frontend, проксируйте запросы через Nginx:

Установка Nginx:
```bash
sudo apt install nginx -y
```

Создание конфигурации сайта:
```bash
sudo nano /etc/nginx/sites-available/dredmark-api
```

Вставьте эту конфигурацию (замените `api.ваш-домен.com` на реальный домен):
```nginx
server {
    listen 80;
    server_name api.ваш-домен.com;

    location / {
        # CORS Headers
        add_header 'Access-Control-Allow-Origin' 'https://www.dredmark.com' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization' always;
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;

        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' 'https://www.dredmark.com' always;
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
            add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization' always;
            add_header 'Access-Control-Max-Age' 1728000;
            add_header 'Content-Type' 'text/plain; charset=utf-8';
            add_header 'Content-Length' 0;
            return 204;
        }

        proxy_pass http://127.0.0.1:5001; # Порт бота из вашего .env
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Активация:
```bash
sudo ln -s /etc/nginx/sites-available/dredmark-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5. Настройка Firewall (UFW)
Открытие нужных портов:
```bash
sudo ufw allow ssh     # Порт 22
sudo ufw allow http    # Порт 80
sudo ufw allow https   # Порт 443
sudo ufw enable
```

### Полезные команды для PM2:
* `pm2 logs dredmark-api-bot` — чтение логов (console.log, ошибки)
* `pm2 restart dredmark-api-bot` — перезапуск
* `pm2 stop dredmark-api-bot` — остановка

### 6. Сборка Frontend (Vite)
При сборке фронтенда на другом сервере или локально, обязательно создайте файл `.env.production` в корневой папке (не в `server/`):
```bash
VITE_API_URL=https://api.ваш-домен.com
```
Затем выполните сборку: `npm run build`.

### 7. Решение проблем (Troubleshooting)

**Ошибка: "Connection Error" или "Ошибка подключения"**
1. Проверьте доступность API по адресу: `https://api.ваш-домен.com/api/health`. Должно вернуться `{"status":"UP", ...}`.
2. Проверьте логи сервера: `pm2 logs dredmark-api-bot`.
3. Убедитесь, что в `.env` файле на сервере `CORS_ORIGIN` совпадает с адресом вашего фронтенда (например, `https://www.dredmark.com`).
4. Если вы используете SSL, убедитесь, что `VITE_API_URL` начинается с `https://`.
