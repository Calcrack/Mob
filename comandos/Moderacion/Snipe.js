const Discord = require('discord.js');

module.exports = {
    name: "snipee",
    aliases: [],
    run: async (client, message, args) => {

 const channel = message.mentions.channels.first() || message.channel;

      const msg = client.snipes.get(channel.id)

      if(!msg){
        message.channel.send("No se a borrado ningun mensaje")
      } else {
        const embed = new Discord.MessageEmbed()

        .setTitle("SNIPE")
        .setAuthor(`Mensaje escrito por ${msg.delete.tag}`, msg.delete.displayAvatarURL())
        .addField("canal", `<#${msg.canal.id}>`)
        .setDescription(msg.content.toString())
        .setColor("RED")
        message.channel.send({ embeds: [embed] })
        
      }

 }
 
};  
