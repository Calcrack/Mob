const Discord = require('discord.js');
const humanizeDuration = require('humanize-duration');
const db = require("megadb");
const dinero = new db.crearDB("dinero");
const herramienta = new db.crearDB("herramienta");
const cooldowns = new Map();

module.exports = {
    name: "fish",
    aliases: [],
    run: async (client, message, args) => {
      const user = message.author 
      let cantidad = 1
      if(!dinero.tiene(`${user.id}`)){
      dinero.establecer(`${user.id}.cash`, 0)
      dinero.establecer(`${user.id}.bank`, 0)
      dinero.establecer(`${user.id}.total`, 0)}
      const cooldown = cooldowns.get(message.author.id);
if (cooldown) {
  const remaining = humanizeDuration(cooldown - Date.now(), { 
  	language: "es",
  	spacer: " ",
  	maxDecimalPoints : 0,
  	units: ["m", "s"],
  	});
    const cool = parseInt(remaining);
  const cooll = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`<a:cargando:925847966722428939> Debes esperar ${remaining} para volver a usar el comando`)
    .setColor("GREEN")
  return message.channel.send({ embeds: [cooll]})
    .catch(console.error);
}
      if(!herramienta.tiene(`${user.id}`)){
herramienta.establecer(`${user.id}.pico`, 0)
herramienta.establecer(`${user.id}.hacha`, 0)
herramienta.establecer(`${user.id}.espada`, 0)
herramienta.establecer(`${user.id}.caña`, 0)
}
      let cañas = await herramienta.obtener(`${user.id}.caña`)
            let random = Math.floor(Math.random() * 890) + 10
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
      .setDescription("<:No:925269844197269534> No tienes una caña")
      .setColor("RED")
      const embe = new Discord.MessageEmbed()
      .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true}))
      .setDescription(`Pescaste varios peces y los vendiste por ${random}<:Moneda:925044214901907487>`)
      .setColor("GREEN")
      if(cantidad > cañas){ return message.channel.send({ embeds: [embed] })} else{
      message.channel.send({ embeds: [embe] })
       dinero.sumar(`${user.id}.cash`, random)
 dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`))
      }
      
 cooldowns.set(message.author.id, Date.now() + 180000);
  setTimeout(() => cooldowns.delete(message.author.id), 180000);

}
};

