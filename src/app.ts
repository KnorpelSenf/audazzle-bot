// enable environment vars
import { config } from 'dotenv';
config();

import Debug from 'debug';
const debug = Debug('app');

import Bot from './bot/bot';

const bot = new Bot();
try {
    bot.start();
    debug('Bot started.');
} catch (e) {
    debug('Failed to start: ' + e);
}
