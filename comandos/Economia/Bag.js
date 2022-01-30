const Discord = require('discord.js');
const db = require("megadb");
const dinero = new db.crearDB("dinero");
const herramienta = new db.crearDB("herramienta");

module.exports = {
    name: "bag",
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

let pico = await herramienta.get(`${usuario.id}.pico`)
let hacha = await herramienta.get(`${usuario.id}.hacha`)
let espada = await herramienta.get(`${usuario.id}.espada`)
let caña = await herramienta.get(`${usuario.id}.caña`)
let total = await dinero.get(`${usuario.id}.total`)
  if(pico === 1) pico = "<:picod:926303221469835294>"
    if(hacha === 1) hacha = "<:hachah:926303555621634100>"
      if(espada === 1) espada = "<:espadap:926303351178682368>"        
        if(caña === 1) caña = "<:pescar:929096311507128341>"
  
      if(pico === 0) pico = "<:picont:934478595366215740>"
    if(hacha === 0) hacha = "<:hachant:934478622322987058>"
      if(espada === 0) espada = "<:espadant:934478645827879073>"
      if(caña === 0) caña = "<:canant:934478664186359849>"
      
        
const embed = new Discord.MessageEmbed()
.setAuthor(`${usuario.tag}`, usuario.displayAvatarURL({ dynamic: true }))
.addFields({ name: "**Herramientas:**" , value: `${caña.toString()} - ${espada.toString()} - ${hacha.toString()} - ${pico.toString()}`}, {name: "**Dinero:**", value: `${total.toString()}<:Moneda:925044214901907487>`})
.setColor("BLUE")
message.channel.send({embeds: [embed]})
    }
}; 
