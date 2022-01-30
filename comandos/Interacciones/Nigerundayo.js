const Discord = require('discord.js');

module.exports = {
    name: "nigerundayo",
    aliases: [],
    run: async (client, message, args) => {
    	
    	const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} empezo a escapar`)
.setImage("https://media.discordapp.net/attachments/917998425025437698/936435141117607977/y2mate.com_-_NIGERUNDAYO_1080p_1.gif")
.setColor("YELLOW")
message.channel.send({ embeds: [embed] })

 }
 
}; 
