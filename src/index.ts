import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import {
  Client,
  ClientOptions,
  Collection,
  EmbedBuilder,
  Events,
  GatewayIntentBits,
  Partials,
} from 'discord.js';
import axios from 'axios';
const { Message, User, GuildMember, ThreadMember } = Partials;
dotenv.config();
const token = process.env.TOKEN; // add your token here

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.once('ready', async () => {
  console.log('봇이 준비되었습니다.');
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});
client.on('messageCreate', async (msg) => {
  console.log(msg);
  if (msg.content === '!hello') {
    msg.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle('타이틀입니다.')
          .setDescription('설명입니다.')
          .addFields([
            { name: 'name1', value: 'name1 value' },
            { name: 'name2', value: 'name2 value' },
          ]),
      ],
    });
  }
});
// client.on('messageCreate', async (message) => {
//   message.reply({
//     embeds: [
//       new EmbedBuilder()
//         .setTitle('타이틀입니다.')
//         .setDescription('설명입니다.')
//         .addFields([
//           { name: 'name1', value: 'name1 value' },
//           { name: 'name2', value: 'name2 value' },
//         ]),
//     ],
//   });
// });
const marketAll = () => {
  axios
    .get('https://api.upbit.com/v1/market/all')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
};
const Price = () => {
  axios
    .get(`https://api.upbit.com/v1/ticker?markets=KRW-BTC`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
};
Price();
// client.commands = new Collection();
client.login(token);
