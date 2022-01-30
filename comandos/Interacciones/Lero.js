const Discord = require('discord.js');

module.exports = {
    name: "lero",
    aliases: [],
    run: async (client, message, args) => {

    	const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} esta lamiendo una cereza`)
.setImage("https://media.discordapp.net/attachments/917998425025437698/921457946808950855/jojo-rero-lero-jojo.gif")
.setColor("YELLOW")
message.channel.send({ embeds: [embed] })

 }
 
};  
