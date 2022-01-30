const Discord = require('discord.js');

module.exports = {
    name: "aplanadora",
    aliases: [],
    run: async (client, message, args) => {
    	const user = message.mentions.users.first() 
    	if(!user){ return message.channel.send("Menciona a alguien")} else if(user && user.id == message.author.id){ return message.channel.send("No puedes tirarte una aplanadora a ti mismo")} else if(user && user.id == client.user.id){ return message.channel.send("No gracias ya comí")}  	
    	const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} Le lanzo una aplanadora a ${user.username}`)
.setImage("https://media.discordapp.net/attachments/917998425025437698/936435164500881418/y2mate.com_-_Stardust_Crusaders_ROAD_ROLLER_DA_BD_1080p_1080p_1.gif")
.setColor("YELLOW")
message.channel.send({ embeds: [embed] })

 }
 
}; 
