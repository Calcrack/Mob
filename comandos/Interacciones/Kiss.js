const Discord = require('discord.js');
const nekoapi = require('cacao_nekoapi');

module.exports = {
    name: "kiss",
    aliases: [],
    run: async (client, message, args) => {
    let img = await nekoapi.action.kiss()

     const user = message.mentions.users.first()
    if (!user) {
      return message.channel.send("Menciona a alguien").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })  
    }
    
    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author. username} se besó con ${user.username}`)
      .setColor("RANDOM")
      .setImage(img.url)
      if (user && user.id == client.user.id) {
      return message.channel.send("Mi mamá no me deja<:MobLechita:873724024503549992>").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })} else if (user && user.id == message.author.id) {
      return message.channel.send("Como te vas a besar a ti mismo<:khe:909156172328742954>?").then((msg) => {
            setTimeout(() => {
            msg.delete();
            }, 5000)
            })  
    } else {

    message.channel.send({ embeds: [embed] })
   }
 }
}