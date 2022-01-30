const Discord = require('discord.js');
const db = require("megadb");
const dinero = new db.crearDB("dinero");

module.exports = {
    name: "top",
    aliases: [],
    run: async (client, message, args) => {
      let sort = await dinero.sort(false, "total")
      let map;
      try{
      map = sort.map(datos => `**${client.users.resolve(datos.clave).tag}**\n${datos.valor.total} <:Moneda:925044214901907487>`)
      }catch(error) {
        map = sort.map(datos => `**<@!${datos.clave}>**\n${datos.valor.total} <:Moneda:925044214901907487>`)
      }
      let embed = new Discord.MessageEmbed()
      .setTitle("Top economia")
      .setDescription(map.slice(0,10).join("\n"))
      .setColor("RANDOM")
      .setTimestamp()
      .setThumbnail(message.guild.iconURL())
      message.channel.send({ embeds: [embed] })
    
    }
}; 
