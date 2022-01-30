const Discord = require('discord.js');
const nekoapi = require('cacao_nekoapi');

module.exports = {
    name: "hug",
    aliases: [],
    run: async (client, message, args) => {
    let img = await nekoapi.action.hug()

     const user = message.mentions.users.first()
    if (!user) {
      return message.channel.send("Menciona a alguien").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })  
    }
    
    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} abrazó a ${user.username}`)
      .setColor("RANDOM")
      .setImage(img.url)
      if (user && user.id == client.user.id) {
      return message.channel.send("No gracias estas feo").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })} else if (user && user.id == message.author.id) {
      return message.channel.send("¿Estas solo? dame un abrazo a mí").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })  
    } else {

    message.channel.send({ embeds: [embed] })
   }
 }
              }