const db = require("megadb")
const warns = new db.crearDB("warns")
const Discord = require('discord.js');

module.exports = {
    name: "warn",
    aliases: [],
    run: async (client, message, args) => {

      let permiso = message.member.permissions.has("KICK_MEMBERS")
if(!permiso)return message.channel.send("No tienes suficientes permisos!")

  let member = message.mentions.members.first()
  if(!member) return message.channel.send("Necesitas mencionar a alguien para warnear <:No:925269844197269534>")
      if (member && member.id == client.user.id) {
      return message.channel.send("No puedes warnearme <:No:925269844197269534>")}
      if (member && member.id == message.author.id) {
      return message.channel.send("No puedes warnearte <:No:925269844197269534>")}
      if(member.user.bot)return message.channel.send('No puedes mencionar bots <:No:925269844197269534>') 
if(message.member.roles.highest.position < member.roles.highest.position)return message.reply({ content: "Este usuario no tiene un rol mas alto que el tuyo! <:No:925269844197269534>", allowedMentions: { repliedUser: false}})
      

  var razon = args.slice(1).join(' ')
  if(!razon){
    razon = 'No especificado'
  }

  if(!warns.tiene(`${message.guild.id}.${member.id}`))
  warns.establecer(`${message.guild.id}.${member.id}`, 0)

  warns.sumar(`${message.guild.id}.${member.id}`, 1)

  const embed = new Discord.MessageEmbed()
  .setThumbnail (member.displayAvatarURL({ formatdynamic: true, size: 1024 }))
  .setTitle("<:No:925269844197269534> | Warn ")
  .addField(`Moderador:`, `${message.author}`)
  .setDescription(`Se ha agregado un warn al usuario:\n${member}`)
  .setColor("RED")
  .addField(`Razon:`, `${razon}`)
  message.channel.send({ embeds: [embed]})


    }
}; 
