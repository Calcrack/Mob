const Discord = require('discord.js');

module.exports = {
    name: "ohno",
    aliases: [],
    run: async (client, message, args) => {
    	
    	const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} Se golpeo a si mismo`)
.setImage("https://media.discordapp.net/attachments/917998425025437698/936439391939862528/Young_Joseph_Joestar_-_All__Oh_No__Moments_JoJos_Bizarre_Adventure_1.gif")
.setColor("YELLOW")
message.channel.send({ embeds: [embed] })

 }
 
}; 
