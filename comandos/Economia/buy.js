const Discord = require('discord.js');
const db = require("megadb");
const dinero = new db.crearDB("dinero");
const herramienta = new db.crearDB("herramienta")

module.exports = {
    name: "buy",
    aliases: ["comprar"],
    run: async (client, message, args) => {
      
      let user = message.author
       
        const nohay = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`<:No:925269844197269534> Ese objeto no existe`)
    .setColor("RED")
    


      if(!dinero.tiene(`${user.id}.cash`)){
dinero.establecer(`${user.id}.cash`, 0)
dinero.establecer(`${user.id}.bank`, 0)
dinero.establecer(`${user.id}.total`, 0)
}
      if(!herramienta.tiene(`${user.id}`)){
herramienta.establecer(`${user.id}.pico`, 0)
herramienta.establecer(`${user.id}.hacha`, 0)
herramienta.establecer(`${user.id}.espada`, 0)
herramienta.establecer(`${user.id}.caña`, 0)
      }

      let objeto = args[0]
      const menciona = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor("RED")
    .setDescription(`<:No:925269844197269534> Escribe el ítem que quieras comprar!`)
      if(!objeto) return message.channel.send({ embeds: [menciona] })

      let dinerouser = await dinero.obtener(`${user.id}.cash`)

      if(!herramienta.tiene(`${user.id}`)){
        herramienta.establecer(`${user.id}.pico`, 0)
        herramienta.establecer(`${user.id}.hacha`, 0)
        herramienta.establecer(`${user.id}.espada`, 0)
        herramienta.establecer(`${user.id}.caña`, 0)
      }

      if(objeto === "pico" || objeto === "Pico"){
        	const o = 15000
        	let picos = await herramienta.obtener(`${user.id}.pico`)
        	let c = 0
        const ya = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Ya tienes un pico!`)
    .setColor("GREEN")
        	if(c < picos){ return message.channel.send({ embeds: [ya]})}
        const notiene = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`<:No:925269844197269534> No tienes suficiente dinero!`)
    .setColor("RED")
    
          if(dinerouser < o) return message.channel.send({ embeds: [notiene]})
          herramienta.sumar(`${user.id}.pico`, 1)
          dinero.restar(`${user.id}.cash`,15000)
        dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`)) 
        const buy = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Compraste un pico!`)
    .setColor("GREEN")
    
        message.channel.send({ embeds: [buy]})
        }
        if(objeto === 'hacha' || objeto === 'Hacha'){
        	const o = 7500
        	let hachas = await herramienta.obtener(`${user.id}.hacha`)
        	let c = 0
        	const ya = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Ya tienes una hacha!`)
    .setColor("GREEN")
        	if(c < hachas){ return message.channel.send({ embeds: [ya]})}
        	const notiene = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`<:No:925269844197269534> No tienes suficiente dinero!`)
    .setColor("RED")
          if(dinerouser < o) return message.channel.send({ embeds: [notiene]})
          herramienta.sumar(`${user.id}.hacha`, 1)
          dinero.restar(`${user.id}.cash`, 7500)
        dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`))
        const buy = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Compraste una hacha!`)
    .setColor("GREEN")
        message.channel.send({ embeds: [buy]})
        }
        if(objeto === 'espada' || objeto === 'Espada'){
        	const o = 5000
        	let espadas = await herramienta.obtener(`${user.id}.espada`)
        	let c = 0
        	const ya = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Ya tienes un pico!`)
    .setColor("GREEN")
        	if(c < espadas){ return message.channel.send({ embeds: [ya]})}
        	const notiene = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`<:No:925269844197269534> No tienes suficiente dinero!`)
    .setColor("RED")
          if(dinerouser < o) return message.channel.send({ embeds: [notiene]})
          herramienta.sumar(`${user.id}.espada`, 1)
          dinero.restar(`${user.id}.cash`, 5000)
        dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`))
        const buy = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Compraste una espada!`)
    .setColor("GREEN")
        message.channel.send({ embeds: [buy]})
        }
        if(objeto === 'caña' || objeto === 'Caña'){
        	const o = 3000
        	let cañas = await herramienta.obtener(`${user.id}.caña`)
        	let c = 0
        	const ya = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Ya tienes una caña!`)
    .setColor("GREEN")
        	if(c < cañas){ return message.channel.send({ embeds: [ya]})}
        	const notiene = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`<:No:925269844197269534> No tienes suficiente dinero!`)
    .setColor("RED")
          if(dinerouser < o) return message.channel.send({ embeds: [notiene]})
          herramienta.sumar(`${user.id}.caña`, 1)
          dinero.restar(`${user.id}.cash`, 3000)
        dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`))
        const buy = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`Compraste una caña!`)
    .setColor("GREEN")
        message.channel.send({ embeds: [buy]})} return message.channel.send({ embeds: [nohay]})

      

      
    }
}; 
