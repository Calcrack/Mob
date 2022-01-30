const db = require("megadb")
const warns = new db.crearDB("warns")
const Discord = require('discord.js');

module.exports = {
    name: "warns",
    aliases: [],
    run: async (client, message, args) => {

      let persona = message.mentions.users.first() || message.author;

    var razon = args.slice(1).join(' ')
  if(!razon){
    razon = 'No especificado'
  }

  let cantidad = await warns.obtener(`${message.guild.id}.${persona.id}`)

  let razons = await warns.obtener(`${message.guild.id}.${persona.id}`)

  if(!warns.tiene(`${message.guild.id}.${persona.id}`)) return message.reply({ content: "Este usuario no tiene warns! <:MobLechita:873724024503549992>", allowedMentions: { repliedUser: false}})

  let ar = await warns.obtener(`${message.guild.id}.${persona.id}`)

  if(ar < 1) return message.reply({ content: "Este usuario no tiene warns! <:MobLechita:873724024503549992>", allowedMentions: { repliedUser: false}})

  const embed = new Discord.MessageEmbed()
  .setThumbnail (persona.displayAvatarURL({ formatdynamic: true, size: 1024 }))
  .setTitle(":x: | Warn ")
  .addField(`Solicitado por:`, `${message.author}`)
  .setDescription(`El usuario ${persona},\nTiene **${cantidad}** warns`)
  .setColor("RED")
  message.channel.send({ embeds: [embed]})



    }
}; 
