const mineflayer = require("mineflayer");
const config = require("./config.json");
const mcData = require("minecraft-data")(config.version);
const { loginBot } = require('./login');

  const bot = mineflayer.createBot({
    host: config.host,
    username: config.username,
    auth: config.auth,
    port: config.port,
    version: config.version,
    keepAlive: true,
  });

  loginBot(bot);
  
  bot.on('kicked', console.log)
  bot.on('error', console.log)

  bot.on("message", (message) => {
    console.log(message.toAnsi());
  });

  const bot1 = mineflayer.createBot({
    host: config.host,
    username: config.username1,
    auth: config.auth,
    port: config.port,
    version: config.version,
    keepAlive: true,
  });

loginBot(bot1);

const bot2 = mineflayer.createBot({
  host: config.host,
  username: config.username2,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot2);

const bot3 = mineflayer.createBot({
  host: config.host,
  username: config.username3,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot3);

const bot4 = mineflayer.createBot({
  host: config.host,
  username: config.username4,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot4);

const bot5 = mineflayer.createBot({
  host: config.host,
  username: config.username5,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot5);

const bot6 = mineflayer.createBot({
  host: config.host,
  username: config.username6,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot6);

const bot7 = mineflayer.createBot({
  host: config.host,
  username: config.username7,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot7);

const bot8 = mineflayer.createBot({
  host: config.host,
  username: config.username8,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot8);

const bot9 = mineflayer.createBot({
  host: config.host,
  username: config.username9,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot9);

const bot10 = mineflayer.createBot({
  host: config.host,
  username: config.username10,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot10);

const bot11 = mineflayer.createBot({
  host: config.host,
  username: config.username11,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot11);

const bot12 = mineflayer.createBot({
  host: config.host,
  username: config.username12,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot12);

const bot13 = mineflayer.createBot({
  host: config.host,
  username: config.username13,
  auth: config.auth,
  port: config.port,
  version: config.version,
  keepAlive: true,
});

loginBot(bot13);
