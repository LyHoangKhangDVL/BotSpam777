const fs = require('fs');
const config = require('./config.json');
function loginBot(bot) {

  const pass = process.env.pass;

  bot.on('kicked', console.log)
  bot.on('error', console.log)
  
  bot.on("messagestr", (message) => {
    if (message.includes("Use the command /register <password> <password>.")) {
      bot.chat(`/register ${pass} ${pass}`);
    }
    if (message.includes("Use the command /login <password>.")) {
        bot.chat(`/login ${pass}`);
    }
    if  (message.includes(`Your login session has been continued.`)) {
      bot.chat(`/8b8t`);
    }
    if  (message.includes(`You have successfully logged.`)) {
      bot.chat(`/8b8t`);
    }
    if  (message.includes(`[8b8t] Unknown command do /help`)) {
      bot.chat(`/8b8t`);
    }
  });
  
  bot.on('spawn', () => {
    setInterval(() => {
      fs.readFile('./messages.txt', 'utf-8', (err, data) => {
            if (err) throw err
            const messages = data.split('\n');
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            bot.chat(`${randomMsg} [${random()}]`);
            bot.setControlState('sneak', true);
            bot.setControlState('sneak', false);
        })
    }, config.delayspammer * 1000)
  })

function random() {

  const vncode = '⁰¹²³⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾⓪①②③④⑤⑥⑦⑧⑨⑩➀➁➂➃➄➅➆➇➈➉⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳⓿❶❷❸❹❺❻❼❽❾❿➊➋➌➍➎➏➐➑➒➓⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzAĂÂBCDĐEÊGHIKLMNOÔƠPQRSTUƯVXYÀÁẢÃẠẰẮẲẴẶẦẤẨẪẬÈÉẺẼẸỀẾỂỄỆÌÍỈĨỊÒÓỎỌÕỒỐỔỖỘỜỚỞỠỢÙÚŨỤỦỪỨỬỮỰỲÝỸỶỴaăâbcdđeêghiklmnoôơpqrstuưvxyàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểẽẹìíỉĩịòóỏọõồốổỗộờớởỡợùuúũụủừứửữựỳýỹỷỵ123456789あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん123456789';

    let rdChars = '';
    let dl = config.maxspamchat;

    for (let i = 0; i < dl; i++) {
        rdChars += vncode.charAt(Math.floor(Math.random() * vncode.length));
    }

    return rdChars ;
 }
}

module.exports = { loginBot };
