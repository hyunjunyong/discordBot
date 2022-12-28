import { Embed } from 'discord.js';

module.exports = {
  name: 'ping',
  description: 'Returns websocket latency',

  run: async (
    client: { ws: { ping: any } },
    interaction: {
      user: { tag: any; displayAvatarURL: () => any };
      followUp: (arg0: { embeds: any[] }) => void;
    }
  ) => {
    const embed = new Embed()
      .setColor('#FF0000')
      .setTitle('🏓 Pong!')
      .setDescription(`Latency : ${client.ws.ping}ms`)
      .setTimestamp()
      .setFooter({
        text: `Requested by ${interaction.user.tag}`,
        iconURL: `${interaction.user.displayAvatarURL()}`,
      });
    interaction.followUp({ embeds: [embed] });
  },
};
