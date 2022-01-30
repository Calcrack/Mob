const Discord = require('discord.js');
const db = require("megadb");
const dinero = new db.crearDB("dinero");
const humanizeDuration = require('humanize-duration');
const cooldowns = new Map();

module.exports = {
    name: "rob",
    aliases: [],
  run: async (client, message, args) => {
      
      let user = message.author      
        if(!dinero.tiene(`${user.id}.cash`)){

dinero.establecer(`${user.id}.cash`, 0)
}
      if(!dinero.tiene(`${user.id}.bank`)){
dinero.establecer(`${user.id}.bank`, 0)
}      if(!dinero.tiene(`${user.id}.total`)){
dinero.establecer(`${user.id}.total`, 0)
      }
      let persona = message.mentions.users.first()
      const cooldown = cooldowns.get(message.author.id);
if (cooldown) {
  const remaining = humanizeDuration(cooldown - Date.now(), { 
  	language: "es",
  	spacer: "",
  	maxDecimalPoints : 0,
  	units: ["h", "m", "s"],
  	});
    const cool = parseInt(remaining);
  const cooll = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`<a:cargando:925847966722428939> Debes esperar ${remaining} para volver a usar el comando`)
    .setColor("GREEN")
  return message.channel.send({ embeds: [cooll]})
    .catch(console.error);
}

  const mencionar = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RED")
    .setDescription(`<:No:925269844197269534> Debes mencionar a alguien!`)
      if(!persona) return message.channel.send({ embeds: [mencionar]})

    const robarte = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RED")
    .setDescription(`<:No:925269844197269534> No puedes robarte a ti mismo!`)
      if(persona.id === message.author.id) return message.channel.send({ embeds: [robarte]})
      
      const sindinero = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RED")
    .setDescription(`<:No:925269844197269534> El usuario que intentas robar no tiene dinero en mano`)

      if(!dinero.tiene(`${persona.id}.cash`)) return message.channel.send({ embeds: [sindinero] })

      let dinerosuyo = await dinero.obtener(`${persona.id}.cash`)
      let dineromio = await dinero.obtener(`${user.id}.total`)
      const notienedinero = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RED")
    .setDescription(`<:No:925269844197269534> El usuario que intentas robar no tiene dinero`)

      if(dinerosuyo < 1) return message.channel.send({ embeds: [notienedinero]})

      let dinerorobar = Math.floor(Math.random() * dinerosuyo) + 1
      let dineroperder = Math.floor(Math.random() * dineromio) + 1
      let probabilidad = Math.floor(Math.random() * 200) + 1
      
      const robarl = new Discord.MessageEmbed()
      .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
      .setDescription(`Has intentado robarle a ${persona.username}, pero la policía te ha capturado y perdiste: ${dineroperder}<:Moneda:925044214901907487>`)
      .setColor("RED")    
      const robarw = new Discord.MessageEmbed()
      .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
      .setDescription(`Has robado correctamente a ${persona.username}, y ganaste: ${dinerorobar}<:Moneda:925044214901907487>`)
      .setColor("GREEN")      
      if(probabilidad > 100){
        message.channel.send({ embeds: [robarl] })
        dinero.restar(`${user.id}.cash`, dineroperder)
        dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`)) 
      }
      if(probabilidad < 100){
        message.channel.send({ embeds: [robarw] })                 
    dinero.restar(`${persona.id}.cash`, dinerorobar)
        dinero.sumar(`${user.id}.cash`, dinerorobar)
        dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`)) 
        dinero.set(`${persona.id}.total`, await dinero.get(`${persona.id}.cash`)+await dinero.get(`${persona.id}.bank`)) 
      }
       cooldowns.set(message.author.id, Date.now() + 43200000);
  setTimeout(() => cooldowns.delete(message.author.id), 43200000);   
    }
}; 