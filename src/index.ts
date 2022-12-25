import dotenv from 'dotenv';
import { Client, ClientOptions } from 'discord.js';
// import {stock} from './stock';
import ready from './listeners/ready';
dotenv.config();
const token = process.env.TOKEN;

console.log('Bot is starting...');

const client = new Client({
  intents: [],
});

// stock(client);
ready(client);
client.login(token);
