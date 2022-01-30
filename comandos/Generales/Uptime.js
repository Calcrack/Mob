const Discord = require('discord.js');

module.exports = {
    name: "uptime",
    aliases: [],
    run: async (client, message, args) => {

      let days = Math.floor(client.uptime / 86400000)
      let hours = Math.floor(client.uptime / 3600000 ) % 24
      let minutes = Math.floor(client.uptime / 60000 ) % 60
      let seconds = Math.floor(client.uptime / 1000 ) % 60

      const uptime = new Discord.MessageEmbed()
      .setTitle(`**Tiempo Activo<:Sho:873360464216731688>**`)
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(client.user.username, client.user.AvatarURL)
      .setDescription(`<a:oyuelo:873335542962614272> \` \`${days} Dias\` \` ${hours} Horas\` \` ${minutes} Minutos\` \` ${seconds} Segundos \ `);
      return message.channel.send({ embeds: [uptime] })

 }
 
}; 
