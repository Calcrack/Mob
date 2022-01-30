const Discord = require('discord.js');
const Canvas = require('canvas')
module.exports = {
    name: "sdlg",
    aliases: [],
    run: async (client, message, args) => {
    	
      const user = message.mentions.users.first() || message.author
    	const avatar = await Canvas.loadImage(user.displayAvatarURL({ format:"png" }))
	const canvas = Canvas.createCanvas(800 , 800);
	const ctx = canvas.getContext("2d")
	const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/851634368619085874/909228210888273920/grasapapu.png")
	ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
	ctx.drawImage (background , 0, 0, canvas.width, canvas.height);
	const attachment = new
Discord.MessageAttachment(
	canvas.toBuffer(), `${user.username}_grasapapuado.jpg`);
      message.channel.send({ files: [attachment] })
	}
	};
