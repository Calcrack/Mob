const noodles_api = require('noodles-wrapper');
const Discord = require('discord.js');

module.exports = {
    name: "void",
    aliases: [],
    run: async (client, message, args) => {
      
      const a = message.mentions.users.first() || message.author

      const b = a.displayAvatarURL({dynamic: false, format: "png", size: 2048})

      
let c = await noodles_api.edges(b)

      const d = new Discord.MessageAttachment(c, "void.png")

message.channel.send({ files: [d] })
  
 }
 
}; 