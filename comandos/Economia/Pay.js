const Discord = require('discord.js');
const db = require("megadb");
const dinero = new db.crearDB("dinero");
const humanizeDuration = require('humanize-duration');
const cooldowns = new Map();

module.exports = {
    name: "pay",
    aliases: [],
  run: async (client, message, args) => {
    if(message.reference) return message.channel.send("Debes mencionar a alguien en el mensaje")
      
      let user = message.author      
        if(!dinero.tiene(`${user.id}.cash`)){

dinero.establecer(`${user.id}.cash`, 0)
}
      if(!dinero.tiene(`${user.id}.bank`)){
dinero.establecer(`${user.id}.bank`, 0)
}      if(!dinero.tiene(`${user.id}.total`)){
dinero.establecer(`${user.id}.total`, 0)
      }
      const mencionar = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RED")
    .setDescription(`<:No:925269844197269534> Debes mencionar a alguien`)
    const pagarte = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RED")
    .setDescription(`<:No:925269844197269534> No puedes pagarte a ti mismo!`)
    const pagarme = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RED")
    .setDescription(`<:No:925269844197269534> No puedes darme dinero!`)
    const pagarle = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RED")
    .setDescription(`<:No:925269844197269534> No puedes pagarle a un bot!`)
      let persona = message.mentions.members.first()
      if(!persona) return message.channel.send({ embeds: [mencionar]})
      if(persona.id === message.author.id) return message.channel.send({ embeds: [pagarte]})
    if (persona && persona.id == client.user.id) {
      return message.channel.send({ embeds: [pagarme]})}
      if(persona.user.bot)return message.channel.send({ embeds: [pagarle]})

                if(!dinero.tiene(`${persona.id}.cash`)){
dinero.establecer(`${persona.id}.cash`, 0)
}
      if(!dinero.tiene(`${persona.id}.bank`)){
dinero.establecer(`${persona.id}.bank`, 0)
}      if(!dinero.tiene(`${persona.id}.total`)){
dinero.establecer(`${persona.id}.total`, 0)
      }
      let cantidad = args[1]
      let dinerot = await dinero.obtener(`${user.id}.cash`)
  const amountParsed = parseInt(cantidad);
  const nodinero = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RED")
    .setDescription(`<:No:925269844197269534> Debes mencionar a alguien!`)
    if(dinerot < 1) return message.channel.send({ embeds: [nodinero] })
const embed = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
.setDescription("<:No:925269844197269534> No tienes dinero")
.setColor("RED")

if(amountParsed > dinerot) return message.channel.send({ embeds: [embed] })
      const embed1 = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
.setDescription("Escribe la cantidad para depositar")
.setColor("GREEN")

if(!cantidad) return message.channel.send({ embeds: [embed1] })
    
    if(cantidad === 'all'){
const cantidadtotal = await dinero.obtener(`${user.id}.cash`)
dinero.restar(`${user.id}.cash`, cantidadtotal)
dinero.sumar(`${persona.id}.cash`, cantidadtotal)
    const embed3 = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Pagaste ${cantidadtotal}<:Moneda:925044214901907487> a ${persona.username}`)
    .setColor("GREEN")
      dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`)) 
        dinero.set(`${persona.id}.total`, await dinero.get(`${persona.id}.cash`)+await dinero.get(`${persona.id}.bank`))

return message.channel.send({ embeds: [embed3] })
}
const embe = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
.setDescription("<:No:925269844197269534> ¡Solo números!")
.setColor("RED")
if(!cantidad || isNaN(cantidad))
      return message.channel.send({ embeds: [embe] });

const embed3 = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
.setDescription("<:No:925269844197269534> elige un numero mayor a 0")
.setColor("RED")
    if(!Number.parseInt(cantidad)){
	return message.channel.send("<:No:925269844197269534> No coloques decimales o caracteres especiales")
    }
    if(cantidad < 1 ) return message.channel.send({ embeds: [embed3] })
    
    const embed4 = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
.setDescription('<:No:925269844197269534> ¡Solo número!')
.setColor("RED")

    if(isNaN(amountParsed)) return message.channel.send({ embeds: [embed4] })
      
      const pay = new Discord.MessageEmbed()
      .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
      .setDescription(`Le pagaste ${amountParsed}<:Moneda:925044214901907487> a ${persona.user.username}`)
      .setColor("GREEN")     
        message.channel.send({ embeds: [pay] })
        dinero.restar(`${user.id}.cash`, amountParsed)
        dinero.sumar(`${persona.id}.cash`, amountParsed)
        dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`)) 
        dinero.set(`${persona.id}.total`, await dinero.get(`${persona.id}.cash`)+await dinero.get(`${persona.id}.bank`)) 
    }
};