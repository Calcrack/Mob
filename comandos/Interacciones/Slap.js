const Discord = require('discord.js');
const nekoapi = require('cacao_nekoapi');

module.exports = {
    name: "slap",
    aliases: [],
    run: async (client, message, args) => {
    let img = await nekoapi.action.slap()

     const user = message.mentions.users.first()
    if (!user) {
      return message.channel.send("Menciona a alguien").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })  
    }
    
    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} le dio una cachetada a ${user.username}`)
      .setColor("RANDOM")
      .setImage(img.url)
      if (user && user.id == client.user.id) {
      return message.channel.send("No gracias ya comí").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })} else if (user && user.id == message.author.id) {
      return message.channel.send("¿Por qué te quieres dar una cachetada XD?").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })  
    } else {

    message.channel.send({ embeds: [embed] })
   }
 }
}