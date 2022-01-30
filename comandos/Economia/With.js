const Discord = require('discord.js');
const db = require("megadb");
const dinero = new db.crearDB("dinero");
const herramienta = new db.crearDB("herramienta");

module.exports = {
    name: "with",
    aliases: [],
    run: async (client, message, args) => {
      const user = message.author

if(!dinero.tiene(`${user.id}.cash`)){
dinero.establecer(`${user.id}.cash`, 0)
}
      if(!dinero.tiene(`${user.id}.bank`)){
dinero.establecer(`${user.id}.bank`, 0)
}      if(!dinero.tiene(`${user.id}.total`)){
dinero.establecer(`${user.id}.total`, 0)
      }
      if(!herramienta.tiene(`${user.id}`)){
herramienta.establecer(`${user.id}.pico`, 0)
herramienta.establecer(`${user.id}.hacha`, 0)
herramienta.establecer(`${user.id}.espada`, 0)
herramienta.establecer(`${user.id}.caña`, 0)
      }

const cantidad = args[0]
let dinerot = await dinero.obtener(`${user.id}.bank`)
  const amountParsed = parseInt(cantidad);
      if(dinerot < 1) return message.reply({ content: "no tienes dinero para retirar", allowedMentions: { repliedUser: false }})

const embed = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
.setDescription("<:No:925269844197269534> No tienes tanto dinero para retirar")
.setColor("RED")
if(amountParsed > dinerot) return message.channel.send({ embeds: [embed] })

const embed1 = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
.setDescription("Escribe la cantidad que quieres retirar")
.setColor("GREEN")
if(!cantidad) return message.channel.send({ embeds: [embed1] })

const embed2 = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
.setDescription("<:No:925269844197269534> elige un numero mayor a 0")
.setColor("RED")
    if(cantidad < 1 ) return message.channel.send({ embeds: [embed2] })
      if(cantidad === 'all'){
const cantidadtotal = await dinero.obtener(`${user.id}.bank`)
dinero.restar(`${user.id}.bank`, cantidadtotal)
dinero.sumar(`${user.id}.cash`, cantidadtotal)
    const embed3 = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Retirastes ${cantidadtotal}<:Moneda:925044214901907487> en el banco`)
    .setColor("GREEN")

return message.channel.send({ embeds: [embed3] })
}
      const embe = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
.setDescription("<:No:925269844197269534> ¡Solo números!")
.setColor("RED")
if(!cantidad || isNaN(cantidad))
      return message.channel.send({ embeds: [embe] });
    const embed4 = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Retiraste ${amountParsed}<:Moneda:925044214901907487> en el banco`)
    .setColor("GREEN")
    
const embed5 = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
.setDescription("<:No:925269844197269534> ¡Solo números!")
.setColor("RED")
    if(isNaN(amountParsed)) return message.channel.send({ embeds: [embed5] })
dinero.restar(`${user.id}.bank`, amountParsed)
dinero.sumar(`${user.id}.cash`, amountParsed)
dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`))
if(!Number.parseInt(cantidad)){
	return message.channel.send("No decimales")
}
message.channel.send({ embeds: [embed4] })
    }
}; 