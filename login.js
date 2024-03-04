const fs = require('fs');
const config = require("./config.json");

function loginBot(bot) {

  const pass = config.auth_password;

  bot.on("messagestr", (message) => {
    if (message.includes("Use the command /register <password> <password>.")) {
      bot.chat(`/register ${pass} ${pass}`);
    }
    if (message.includes("Use the command /login <password>.")) {
        bot.chat(`/login ${pass}`);
    }
    if  (message.includes(`${config.username} joined`)) {
      bot.chat(`/8b8t`);
    }
    if  (message.includes(`[8b8t] Unknown command do /help`)) {
      bot.chat(`/8b8t`);
    }
    if  (message.includes(`Please, register to the server with the command: /register <password> <ConfirmPassword>`)) {
      bot.chat(`/register ${pass} ${pass}`);
      bot.setControlState('forward', true);
    }
    if  (message.includes(`Please, login with the command: /login <password>`)) {
      bot.chat(`/login ${pass}`);
      bot.setControlState('forward', true);
    }
  });

  bot.on('spawn', () => {
    setInterval(() => {
      fs.readFile('./messages.txt', 'utf-8', (err, data) => {
            if (err) throw err
            const messages = data.split('\n');
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            bot.chat(`${randomMsg} | [${random()}]`);
        })
    }, config.delayspammer * 1000)
  })

function random() {
    const unicode = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const vncode = 'AĂÂBCDĐEÊGHIKLMNOÔƠPQRSTUƯVXYÀÁẢÃẠẰẮẲẴẶẦẤẨẪẬÈÉẺẼẸỀẾỂỄỆÌÍỈĨỊÒÓỎỌÕỒỐỔỖỘỜỚỞỠỢÙÚŨỤỦỪỨỬỮỰỲÝỸỶỴaăâbcdđeêghiklmnoôơpqrstuưvxyàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểẽẹìíỉĩịòóỏọõồốổỗộờớởỡợùuúũụủừứửữựỳýỹỷỵ123456789';

    let randomChars = '';
    let rdChars = '';

    for (let i = 0; i < 20; i++) {
        randomChars += unicode.charAt(Math.floor(Math.random() * unicode.length));
        rdChars += vncode.charAt(Math.floor(Math.random() * vncode.length));
    }

    return randomChars + rdChars;
}

module.exports = { loginBot };
