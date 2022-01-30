const Discord = require('discord.js');

module.exports = {
    name: "dio",
    aliases: [],
    run: async (client, message, args) => {
    	
    	const embed = new Discord.MessageEmbed()
.setTitle(`Creiste que era ${message.author.username} pero era yo DIO`)
.setImage("https://media.discordapp.net/attachments/917998425025437698/917998506558513153/c5acfda4d61af5ca46acd5f7393e0f44.gif")
.setColor("YELLOW")
message.channel.send({ embeds: [embed] })

 }
 
}; 
