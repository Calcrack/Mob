const Discord = require('discord.js');
const humanizeDuration = require('humanize-duration');
const db = require("megadb");
const dinero = new db.crearDB("dinero");
const cooldowns = new Map();

module.exports = {
    name: "daily",
    aliases: ["d"],
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
      const cooldown = cooldowns.get(message.author.id);
if (cooldown) {
  const remaining = humanizeDuration(cooldown - Date.now(), { 
  	language: "es",
  	spacer: " ",
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
      if(!dinero.tiene(`${user.id}`)){
      dinero.establecer(`${user.id}`, 0)}
            let money = "750"
 dinero.sumar(`${user.id}.cash`, money)
      dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`))
 const embed = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
.setDescription(`Se te dieron tus ${money}<:Moneda:925044214901907487> diarios`)
.setColor("GREEN")
 message.channel.send({ embeds: [embed] })

 cooldowns.set(message.author.id, Date.now() + 86400000);
  setTimeout(() => cooldowns.delete(message.author.id), 86400000);
    }
};
