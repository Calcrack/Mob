const Discord = require('discord.js');
const nekoapi = require('cacao_nekoapi');

module.exports = {
    name: "shot",
    aliases: [],
    run: async (client, message, args) => {
    let img = await nekoapi.action.shot()

     const user = message.mentions.users.first()
    if (!user) {
      return message.channel.send("Menciona a alguien").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })  
    }
    
    const embed = new Discord.MessageEmbed()
      .setDescription(`${user.username} le sabia demasiado`)
      .setColor("RANDOM")
      .setImage(img.url)
      if (user && user.id == client.user.id) {
      return message.channel.send("No me hiciste nada soy inmune <:MobLechita:873724024503549992>").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })} else if (user && user.id == message.author.id) {
      return message.channel.send("No te dispares yo te quiero<:MobLechita:873724024503549992>").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })  
    } else {

    message.channel.send({ embeds: [embed] })
   }
 }
}