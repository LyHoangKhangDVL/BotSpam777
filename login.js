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
    const vncode = 'AĂÂBCDĐEÊGHIKLMNOÔƠPQRSTUƯVXYÀÁẢÃẠẰẮẲẴẶẦẤẨẪẬÈÉẺẼẸỀẾỂỄỆÌÍỈĨỊÒÓỎỌÕỒỐỔỖỘỜỚỞỠỢÙÚŨỤỦỪỨỬỮỰỲÝỸỶỴaăâbcdđeêghiklmnoôơpqrstuưvxyàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểẽẹìíỉĩịòóỏọõồốổỗộờớởỡợùúũụủừứửữựỳýỹỷỵ123456789'

    let random1 = `${unicode.charAt(Math.floor(Math.random() * unicode.length))}`;
    let random2 = `${unicode.charAt(Math.floor(Math.random() * unicode.length))}`;
    let random3 = `${unicode.charAt(Math.floor(Math.random() * unicode.length))}`;
    let random4 = `${unicode.charAt(Math.floor(Math.random() * unicode.length))}`;
    let random5 = `${unicode.charAt(Math.floor(Math.random() * unicode.length))}`;
    let random6 = `${unicode.charAt(Math.floor(Math.random() * unicode.length))}`;
    let random7 = `${unicode.charAt(Math.floor(Math.random() * unicode.length))}`;
    let random8 = `${unicode.charAt(Math.floor(Math.random() * unicode.length))}`;
    let random9 = `${unicode.charAt(Math.floor(Math.random() * unicode.length))}`;

    let rd1 = `${vncode.charAt(Math.floor(Math.random() * vncode.length))}`;
    let rd2 = `${vncode.charAt(Math.floor(Math.random() * vncode.length))}`;
    let rd3 = `${vncode.charAt(Math.floor(Math.random() * vncode.length))}`;
    let rd4 = `${vncode.charAt(Math.floor(Math.random() * vncode.length))}`;
    let rd5 = `${vncode.charAt(Math.floor(Math.random() * vncode.length))}`;
    let rd6 = `${vncode.charAt(Math.floor(Math.random() * vncode.length))}`;
    let rd7 = `${vncode.charAt(Math.floor(Math.random() * vncode.length))}`;
    let rd8 = `${vncode.charAt(Math.floor(Math.random() * vncode.length))}`;
    let rd9 = `${vncode.charAt(Math.floor(Math.random() * vncode.length))}`;

    return `${random1}${random2}${random3}${random4}${random5}${random6}${random7}${random8}${random9}${rd1}${rd2}${rd3}${rd4}${rd5}${rd6}${rd7}${rd8}${rd9}`;
  };
}

module.exports = { loginBot };
