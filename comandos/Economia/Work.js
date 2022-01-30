const Discord = require('discord.js');
const humanizeDuration = require('humanize-duration');
const db = require("megadb");
const dinero = new db.crearDB("dinero");
const herramienta = new db.crearDB("herramienta");
const cooldowns = new Map();

module.exports = {
    name: "work",
    aliases: ["w"],
    run: async (client, message, args) => { 
      const user = message.author
      const cooldown = cooldowns.get(message.author.id);
if (cooldown) {
  const remaining = humanizeDuration(cooldown - Date.now(), { language: "es" });
    const cool = parseInt(remaining);
  const cooll = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`<a:carga:925273288719102033> Debes esperar ${cool}s para volver a usar el comando`)
    .setColor("GREEN")
  return message.channel.send({ embeds: [cooll]})
    .catch(console.error);
}
      if(!dinero.tiene(`${user.id}`)){
      dinero.establecer(`${user.id}.cash`, 0)
      dinero.establecer(`${user.id}.bank`, 0)
      dinero.establecer(`${user.id}.total`, 0)}
if(!herramienta.tiene(`${user.id}`)){
herramienta.establecer(`${user.id}.pico`, 0)
herramienta.establecer(`${user.id}.hacha`, 0)
herramienta.establecer(`${user.id}.espada`, 0)
herramienta.establecer(`${user.id}.caña`, 0) }            let random = Math.floor(Math.random() * 300) + 100
       let trabajo = ["Exorcizaste un espíritu y ganaste", "Vendiste leche y ganaste", "Trabajaste muy duro y te pagaron", "Vendiste awa de uwu y ganaste", "Le pasaste comandos a Cal y te dio", "¡Feliz Navidad! Santa Claus te ha regalado", "Ganaste la rifa escolar, tu premio es de", "Reportaste un bug y como recompensa te dan", "Metiste a Mob a tu server y te dieron"]
 let randomtrabajo = trabajo[Math.floor(Math.random() * trabajo.length)]
 dinero.sumar(`${user.id}.cash`, random)
 dinero.set(`${message.author.id}.total`, await dinero.get(`${message.author.id}.cash`)+await dinero.get(`${message.author.id}.bank`)) 
 const embed = new Discord.MessageEmbed()
.setAuthor(`${user.tag}`, message.author.displayAvatarURL({ dynamic: true }))
.setDescription(`${randomtrabajo} ${random}<:Moneda:925044214901907487>`)
.setColor("GREEN")
 message.channel.send({ embeds: [embed] })

 cooldowns.set(message.author.id, Date.now() + 30000);
  setTimeout(() => cooldowns.delete(message.author.id), 30000);
    }
};