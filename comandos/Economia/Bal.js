const Discord = require('discord.js');
const db = require("megadb");
const dinero = new db.crearDB("dinero");
const herramienta = new db.crearDB("herramienta");

module.exports = {
    name: "bal",
    aliases: [],
    run: async (client, message, args) => {
      const usuario = message.mentions.users.first() || message.author
        if(!dinero.tiene(`${usuario.id}.cash`)){
dinero.establecer(`${usuario.id}.cash`, 0)
dinero.establecer(`${usuario.id}.bank`, 0)
dinero.establecer(`${usuario.id}.total`, 0)
}
      if(!herramienta.tiene(`${usuario.id}`)){
herramienta.establecer(`${usuario.id}.pico`, 0)
herramienta.establecer(`${usuario.id}.hacha`, 0)
herramienta.establecer(`${usuario.id}.espada`, 0)
herramienta.establecer(`${usuario.id}.caña`, 0)
}
let cash = await dinero.get(`${usuario.id}.cash`)
let bank = await dinero.get(`${usuario.id}.bank`)
let total = await dinero.get(`${usuario.id}.total`)
      
const embed = new Discord.MessageEmbed()
.setAuthor(`${usuario.tag}`, usuario.displayAvatarURL({ dynamic: true }))
.addFields({ name: "**Dinero:**" , value: `${cash.toString()}<:Moneda:925044214901907487>`}, { name: "**Banco:**", value: `${bank.toString()}<:Moneda:925044214901907487>`}, {name: "**Total:**", value: `${total.toString()}<:Moneda:925044214901907487>`})
.setColor("BLUE")
message.channel.send({embeds: [embed]})
    }
}; 
