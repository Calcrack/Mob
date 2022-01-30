const Discord = require('discord.js');
const petPetGif = require('pet-pet-gif');

module.exports = {
    name: "pet",
    aliases: [],
    run: async (client, message, args) => {

      const ping = message.mentions.users.first() || message.author

      let avatar = ping.displayAvatarURL({dynamic: false, format: "png", size: 2048})

      const animatedGif = await petPetGif(avatar);


      const d = new Discord.MessageAttachment(animatedGif, "pet.gif")

message.channel.send({ files: [d] })
      
 }
 
}; 
