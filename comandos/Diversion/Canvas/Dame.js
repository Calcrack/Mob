const Discord = require('discord.js');
const Canvas = require('canvas')
module.exports = {
    name: "dame",
    aliases: [],
    run: async (client, message, args) => {
    	
      const user = message.mentions.users.first() || message.author
    	const avatar = await Canvas.loadImage(user.displayAvatarURL({ format:"png" }))
	const canvas = Canvas.createCanvas(800 , 800);
	const ctx = canvas.getContext("2d")
	const background = await Canvas.loadImage("https://media.discordapp.net/attachments/911696933469438023/911715830604120104/Dame.png")
	ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
	ctx.drawImage (background , 0, 0, canvas.width, canvas.height);
	const attachment = new
Discord.MessageAttachment(
	canvas.toBuffer(), `${user.username}_dame.jpg`);
      message.channel.send({ files: [attachment] })
	}
	};
