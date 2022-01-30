const Discord = require('discord.js');

module.exports = {
    name: "theworld",
    aliases: [],
    run: async (client, message, args) => {
    	
    	const embed = new Discord.MessageEmbed()
.setTitle(`¡THE WORLD!, ${message.author.username} a detenido el tiempo`)
.setImage("https://media.discordapp.net/attachments/917998425025437698/918703070916014090/JoJos_Bizarre_Adventure_-_The_World_1.gif")
.setColor("YELLOW")
message.channel.send({ embeds: [embed] })

 }
 
}; 
