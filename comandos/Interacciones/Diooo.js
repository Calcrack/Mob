const Discord = require('discord.js');

module.exports = {
    name: "diooo",
    aliases: [],
    run: async (client, message, args) => {
    	
    	const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} va a pelear contra Dio`)
.setImage("https://media.discordapp.net/attachments/917998425025437698/936439797826850847/DIOOOOOOO_1.gif")
.setColor("YELLOW")
message.channel.send({ embeds: [embed] })

 }
 
}; 
