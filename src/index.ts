import { Client, ClientOptions } from 'discord.js';

const token = '1056421436178317352'; // add your token here

console.log('Bot is starting...');

const client = new Client({
  intents: [],
});
client.login(token);

console.log(client);
