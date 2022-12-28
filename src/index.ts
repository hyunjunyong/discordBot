import dotenv from 'dotenv';
import { Client, GatewayIntentBits, Partials, Collection } from 'discord.js';
import { SlashCommand } from './types';
import { join } from 'path';
import { readdirSync } from 'fs';
import ready from './events/ready';
import interactionCreate from './events/interactionCreate';

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

client.slashCommands = new Collection<string, SlashCommand>();

const handlersDir = join(__dirname, './handlers');

readdirSync(handlersDir).forEach((handler) => {
  require(`${handlersDir}/${handler}`)(client);
});

// ready(client);
// interactionCreate(client);
client.login(token);
