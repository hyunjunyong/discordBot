import dotenv from 'dotenv';
import { Client, GatewayIntentBits, Partials, Collection } from 'discord.js';

dotenv.config();
const token = process.env.TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on('messageCreate', (message) => {
  if (message.content === 'hello') {
    message.reply({ content: 'world' });
  }
});

client.login(token);
