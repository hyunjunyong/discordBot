import dotenv from 'dotenv';
import {
  Client,
  ClientOptions,
  EmbedBuilder,
  Events,
  GatewayIntentBits,
} from 'discord.js';

dotenv.config();
const token = process.env.TOKEN; // add your token here

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once('ready', async () => {
  console.log('봇이 준비되었습니다.');
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
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

client.login(token);
