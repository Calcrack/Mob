const client = require('../index.js')
const Discord = require("discord.js")
const qdb = require("quick.db")
const prefix = "m!"


client.on("messageCreate", async (message) => {
    if(message.author.bot) return;

  /////Mencion/////
 let mention = message.mentions.members.first()
  let usuario = message.author; 

  
///afk///

  let user = message.mentions.users.first() || message.author;   if(qdb.has(`afk-${message.author.id}+${message.guild.id}`)){
        await qdb.delete(`afk-${message.author.id}+${message.guild.id}`)
        const embed = new Discord.MessageEmbed()

.setTitle(`Bienvenido ${message.author.tag}`)
.setDescription(`tu estado afk se ha removido`)
        .setColor("RANDOM")

message.channel.send({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 25000))
      }
   if(message.mentions.members.first()){
    const info = qdb.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`)
     if(qdb.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)){
       
             const embed2 = new Discord.MessageEmbed()

.setTitle(`¡OYE! ${message.author.username}`)
.setDescription(`${message.mentions.users.first().username} esta en estado afk por el motivo: **${info}**`)
        .setColor("RANDOM")

message.channel.send({ embeds: [embed2] }).then(msg => setTimeout(() => msg.delete(), 25000))
     }
  }
      /// fin afk///
  if(!message.content.toLowerCase().startsWith(prefix)) return;
    const [cmd, ...args] = message.content
        .slice(prefix.length)
        .trim()
        .split(" ");
      

    const command = client.comandos.get(cmd.toLowerCase()) || client.comandos.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);
}); 