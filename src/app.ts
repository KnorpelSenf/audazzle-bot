// enable environment vars
require('dotenv').config();

import Bot from './bot/bot';

const bot = new Bot();
try {
    bot.start();
    console.log('Bot started.');
} catch (e) {
    console.error('Failed to start: ' + e);
}
