const Discord = require('discord.js');

module.exports = {
    name: "caesar",
    aliases: [],
    run: async (client, message, args) => {
    	
    	const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} empezo a llorar por Caesar`)
.setImage("https://media.discordapp.net/attachments/917998425025437698/936435125527412776/SHIZAAAAAA_1.gif")
.setColor("YELLOW")
message.channel.send({ embeds: [embed] })

 }
 
}; 
