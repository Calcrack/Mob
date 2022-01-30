const Discord = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
    name: "trash",
    aliases: [],
    run: async (client, message, args) => {

      const a = message.mentions.users.first() || message.author

      const b = a.displayAvatarURL({dynamic: false, format: "png", size: 2048})

      
let c = await new 
  DIG.Trash().getImage(b)

      const d = new Discord.MessageAttachment(c, "trash.png")

message.channel.send({ files: [d] })
      
 }
 
}; 
