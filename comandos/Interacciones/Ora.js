const Discord = require('discord.js');

module.exports = {
    name: "ora",
    aliases: [],
    run: async (client, message, args) => {
    	
    	const user = message.mentions.users.first() 
    	if(!user){ return message.channel.send("Menciona a alguien")} else if(user && user.id == message.author.id){ return message.channel.send("No puedes golpearte con tu stand")} else if(user && user.id == client.user.id){ return message.channel.send("No gracias ya comí")}  	
    	const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} esta golpeando con su stand a ${user.username}!`)
.setImage("https://media.discordapp.net/attachments/917998425025437698/921456661959430165/mp4-3_1.gif")
.setColor("YELLOW")
message.channel.send({ embeds: [embed] })

 }
 
};  
