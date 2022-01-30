const Discord = require('discord.js');
const Canvas = require('canvas')
module.exports = {
    name: "ship",
    aliases: [],
    run: async (client, message, args) => {

      let mencionados = message.mentions.members.first(2)
        
let p = mencionados[0];
let s = mencionados[1];
      if(!p) return message.channel.send("Menciona a 2 usuario \nejemplo: m!ship @Mob @Reigen")
      if(!s) return message.channel.send("Menciona a otro usuario \nejemplo: m!ship @Mob @Reigen \nNo te puedes mencionar 2 veces") 
      if(p && p.id == client.user.id){ return message.channel.send("Estoy bien así<:MobLechita:873724024503549992>")}
if(s && s.id == client.user.id){ return message.channel.send("Estoy bien así<:MobLechita:873724024503549992>")}
      let RN = Math.floor(Math.random() * 100 ) + 1
       	
  const avatarme = await Canvas.loadImage(p.displayAvatarURL({ format:"png", size: 512 }))
         	const avatar = await Canvas.loadImage(s.user.displayAvatarURL({ format:"png", size: 512}))

const canvas = Canvas.createCanvas(660, 220)
      const avatarT = Canvas.createCanvas(225 , 225);
      const ctx = canvas.getContext("2d")
	const background = await Canvas.loadImage("https://media.discordapp.net/attachments/911696933469438023/914256304065888256/IMG_20211127_154731.png")
	ctx.drawImage (background , 0, 0, canvas.width, canvas.height);    
	ctx.drawImage(avatar, 435, 0, avatarT.width, avatarT.height  );
  	ctx.drawImage(avatarme, 0, 0, avatarT.width, avatarT.height  );
      const attachment = new
Discord.MessageAttachment(
	canvas.toBuffer(), `ship.png`);
const SinAmor = new Discord.MessageEmbed()
.setTitle('Parece que esto no va a funcionar')
.setImage(`attachment://ship.png`)
.setDescription(`${p.user.tag} ship con ${s.user.tag} con un ${RN}%`)

      	const backgroundd = await Canvas.loadImage("https://media.discordapp.net/attachments/911696933469438023/914286058445869066/IMG_20211127_174554.png")
	ctx.drawImage (backgroundd , 0, 0, canvas.width, canvas.height);    
	ctx.drawImage(avatar, 435, 0, avatarT.width, avatarT.height  );
  	ctx.drawImage(avatarme, 0, 0, avatarT.width, avatarT.height  );
      const ship = new
Discord.MessageAttachment(
	canvas.toBuffer(), `shipGod.png`);

const Amor = new Discord.MessageEmbed()
.setTitle('Tu media naranja')
.setImage(`attachment://shipGod.png`)
  .setDescription(`${p.user.tag} ship con ${s.user.tag} con un ${RN}%`)

if(RN > 50) {
	message.channel.send({ embeds: [Amor], files: [ship] })
} else {
	message.channel.send({ embeds: [SinAmor], files: [attachment] })
}


 }
 
}; 