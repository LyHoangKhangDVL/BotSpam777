require('events').EventEmitter.setMaxListeners(0);
require('events').EventEmitter.prototype._maxListeners = 99;
require('dotenv').config();

const mineflayer = require("mineflayer");
const config = require("./config.json");
const mcData = require("minecraft-data")(config.version);
const { loginBot } = require('./login');

function createBot() {
  [config.username, config.username1, config.username2, config.username3].forEach(username => {
    const bot = mineflayer.createBot({
      host: config.host,
      username,
      auth: config.auth,
      port: config.port,
      version: config.version,
      keepAlive: true,
      hideErrors: false,
      timeout: 30000,
      keepaliveInterval: 60000
    });

    loginBot(bot);

    bot.on("message", (message) => {
      console.log(message.toAnsi());
    });

  });
}

createBot();
