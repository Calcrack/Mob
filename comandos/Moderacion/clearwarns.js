const db = require("megadb")
const warns = new db.crearDB("warns")
const Discord = require('discord.js');

module.exports = {
    name: "clearwarns",
    aliases: [],
    run: async (client, message, args) => {

      let permiso = message.member.permissions.has("KICK_MEMBERS")
if(!permiso)return message.channel.send("No tienes suficientes permisos!")

  let member = message.mentions.members.first()
  if(!member) return message.channel.send("Necesitas mencionar a alguien para borrar sus warns <:No:925269844197269534>")

if(message.member.roles.highest.position < member.roles.highest.position)return message.reply({ content: "Este usuario no tiene un rol mas alto que el tuyo! <:No:925269844197269534>", allowedMentions: { repliedUser: false}})
  
  if(!warns.tiene(`${message.guild.id}.${member.id}`))
  return message.reply({ content: "Este usuario no tiene warns! <:MobLechita:873724024503549992>", allowedMentions: { repliedUser: false}})

let ar = await warns.obtener(`${message.guild.id}.${member.id}`)

  if(ar < 1) return message.reply({ content: "Este usuario no tiene warns! <:MobLechita:873724024503549992>", allowedMentions: { repliedUser: false}})

  warns.eliminar(`${message.guild.id}.${member.id}`)

  

  const embed = new Discord.MessageEmbed()
  .setThumbnail (member.displayAvatarURL({ formatdynamic: true, size: 1024 }))
  .setTitle("<:No:925269844197269534> | Warns ")
  .addField(`Moderador:`, `${message.author}`)
  .setDescription(`Se han eliminado todos los warns del usuario:\n${member}`)
  .setColor("RED")
  message.channel.send({ embeds: [embed]})


    }
}; 
