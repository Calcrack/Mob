const Discord = require('discord.js');

module.exports = {
    name: "tequila",
    aliases: [],
    run: async (client, message, args) => {
    	
    	const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} trajo tequila`)
.setImage("https://media.discordapp.net/attachments/917998425025437698/918732697399074886/tumblr_mfeezbben71ry9vkao3_500.gif")
.setColor("YELLOW")
message.channel.send({ embeds: [embed] })

 }
 
};  
