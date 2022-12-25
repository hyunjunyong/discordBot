import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Replies with Pong!'),
  async execute(interaction: { reply: (arg0: string) => any }) {
    await interaction.reply('Pong!');
  },
};
