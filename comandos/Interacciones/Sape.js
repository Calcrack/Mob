const Discord = require('discord.js');
const nekoapi = require('cacao_nekoapi');

module.exports = {
    name: "sape",
    aliases: [],
    run: async (client, message, args) => {
    let img = await nekoapi.action.sape()

     const user = message.mentions.users.first()
    if (!user) {
      return message.channel.send("Menciona a alguien").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })  
    }
    
    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} le pego un sape a ${user.username}`)
      .setColor("RANDOM")
      .setImage(img.url)
      if (user && user.id == client.user.id) {
      return message.channel.send("Chistosito <:khe:909156172328742954>").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })} else if (user && user.id == message.author.id) {
      return message.channel.send("¿Te duele la cabeza? mejor tomate una pastilla").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })  
    } else {

    message.channel.send({ embeds: [embed] })
   }
 }
      }