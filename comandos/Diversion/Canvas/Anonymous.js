const Discord = require('discord.js');
const Canvas = require('canvas')
module.exports = {
    name: "anonymous",
    aliases: [],
    run: async (client, message, args) => {
    	
      const user = message.mentions.users.first() || message.author
    	const avatar = await Canvas.loadImage(user.displayAvatarURL({ format:"png", size: 512 }))
	const canvas = Canvas.createCanvas(800, 800)
      const avatarT = Canvas.createCanvas(231 , 222);
	const ctx = canvas.getContext("2d")
	const background = await Canvas.loadImage("https://media.discordapp.net/attachments/911696933469438023/911703756209532938/1637437452591.png")
	ctx.drawImage(avatar, 289, 143, avatarT.width, avatarT.height  );
	ctx.drawImage (background , 0, 0, canvas.width, canvas.height);
	const attachment = new
Discord.MessageAttachment(
	canvas.toBuffer(), `${user.username}_hacker.jpg`);
      message.channel.send({ files: [attachment] })
	}
	};
