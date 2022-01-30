const Discord = require('discord.js');
const nekoapi = require('cacao_nekoapi');

module.exports = {
    name: "run",
    aliases: [],
    run: async (client, message, args) => {
    let img = await nekoapi.action.run()

    
    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} empezo a correr`)
      .setColor("RANDOM")
      .setImage(img.url)
    message.channel.send({ embeds: [embed] })
   }
 }