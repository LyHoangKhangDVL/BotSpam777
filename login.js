const fs = require('fs');
const config = require("./config.json");

function loginBot(bot) {

  const pass = process.env.pass;

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
            bot.chat(`${randomMsg} |[${random()}]`);
        })
    }, config.delayspammer * 1000)
  })

function random() {
    const vncode = 'AĂÂBCDĐEÊGHIKLMNOÔƠPQRSTUƯVXYÀÁẢÃẠẰẮẲẴẶẦẤẨẪẬÈÉẺẼẸỀẾỂỄỆÌÍỈĨỊÒÓỎỌÕỒỐỔỖỘỜỚỞỠỢÙÚŨỤỦỪỨỬỮỰỲÝỸỶỴaăâbcdđeêghiklmnoôơpqrstuưvxyàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểẽẹìíỉĩịòóỏọõồốổỗộờớởỡợùuúũụủừứửữựỳýỹỷỵ123456789';
  const JP_Hiragana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん123456789';
  const KTDB = 'AaɑαάãąʌคÀÂÃΛᐰΔλﾑⓐⒶBbъьɓвɓƅ๒ҍɮ฿ᗽβßƁ乃ⓑⒷCcċĉƈç©¢ςĆĈČƇᑖⓒⒸDdɗ∂ժძƌɖ₫δᶑđðďÐĎƊⓓⒹEeêҽℯɛεєĕɘΣƎƐℰᙓЄعⓔⒺFfғʄբ⨎ƒ∱Ғ℉ℱ∱ⓕⒻGgɠĝɢʛցʚğġģĝ₲ĜƓĢǤⓖⒼHhĥħнɦԋհɧɥんⴙђЋⴼĤĦΉⓗⒽIiﻨιเĭïì¡ĩϊἶɨɪ|!ჀİΪأﾉⓘⒾJjʝʲڑژנƾⴋįĵĴſ¿ᒛﾌⓙⒿKkƙкқќĸҡҟЌҠ₭ҞҚҜⓚⓀLlĺľŀ1łℓʅɭʟŁ⎳ĿĹĻŁしⓛⓁMmორмɱ₥ʍм๓♏ᗰﾶⓜⓂNnñŋղռɲήภɴийההИЙ₦ƝⓝⓃOōøǿõσơօ๏๑őღ¤♡ØŎƠỜ℺ѺⓞⓄPpρῥþƤƥթքրՉÞᚹṗṖƿǷƤㄕⓟⓅQqҩợԳƍφʠϙǫǭզգԶ٩ΩǪⵕⰢǬҨⓠⓆRrŗѓŕřṝʀяɾгҐℜℝ℞ŔȒŖƦՐЯГ尺☈ⓡⓇSsśšṩ§$ŝşѕֆʂรƨƧŚṨŞٸらⓢⓈTtţτƭťŧтʈէȶƚŢƬŤŦ†ｲⓣⓉTtţτƭťŧтʈէȶƚŢƬŤŦ†ｲ ⓣⓉVvνѵʋ౮vΰύยƲѴƔɣɤ۷⋎√∀ⓥⓋWwŵшщฬ￦ẘὼωᗯШЩŴⓦⓌXxхх×ҳ×ჯ૪χӾЖχӼ〤ﾒⓧⓍYyŷʏყýɥỹÿƳ¥ɣၦⴁⴣⴤуჄÿץγψ￥ㄚⓨⓎZzẓƶȥʐʑʒʓẕžƵẐẔŹ乙ⓩⓏᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿᵒᵖᑫʳˢᵗᵘᵛʷˣʸᶻₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ⁰¹²³⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾⓪①②③④⑤⑥⑦⑧⑨⑩➀➁➂➃➄➅➆➇➈➉⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳⓿❶❷❸❹❺❻❼❽❾❿➊➋➌➍➎➏➐➑➒➓⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴';

    let rdChars = '';
    let rdJPh = '';
    let rdKTDB = '';

    for (let i = 0; i < 200; i++) {
        rdChars += vncode.charAt(Math.floor(Math.random() * vncode.length));
        rdJPh += JP_Hiragana.charAt(Math.floor(Math.random() * JP_Hiragana.length));
        rdKTDB += KTDB.charAt(Math.floor(Math.random() * KTDB.length));
    }

    return rdChars + rdJPh + rdKTDB;
 }
}

module.exports = { loginBot };
