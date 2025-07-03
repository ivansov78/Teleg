const TelegramBot = require('node-telegram-bot-api');

// 6tgQ5eOB41AvuHnlclHNocDz99aWWUM/getWebhookInfo
const token = process.env.TOKEN;

if (!token) {
  console.error('Ошибка: токен бота не задан в переменной окружения TOKEN');
  process.exit(1);
}

// Создаём бота с polling (регулярно опрашиваем Telegram на новые сообщения)
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text) {
    const response = `
1. Что это: ${text}
2. Что делать: Информация по вашему запросу.
3. Документы: Соответствующие документы.
4. Сроки и стоимость: Зависит от конкретного случая.
5. Контакты: Свяжитесь с нами для подробностей.
`;
    bot.sendMessage(chatId, response);
  }
});

console.log('Бот запущен и ожидает сообщений...');
