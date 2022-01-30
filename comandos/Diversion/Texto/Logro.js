const Discord = require('discord.js');

module.exports = {
    name: "logro",
    aliases: [],
    run: async (client, message, args) => {

      if(message.mentions.members.first()) return message.channel.send("No puedes piguear")
function getRndInteger(min, max) {
 return Math.floor(Math.random() * (max - min + 1) ) + min;
} 

var randomNum = getRndInteger(1, 39);
      let text = args.join('+')
    if(!text) return message.channel.send('Escribe algo')
      
    if(message.content.length > 29) return message.channel.send('El texto es muy largo') 
      const finalLink = `https://minecraftskinstealer.com/achievement/${randomNum}/%C2%A1Logro+obtenido%21+/${text}`

if(text.match(new RegExp(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g))){ return message.channel.send("No se permiten emojis en el texto") } else if (text.match(new RegExp(/(<a?)?:\w+:(\d{18}>)?/g ))){ return message.channel.send("No se permiten emojis en el texto") }


        const attach = new Discord.MessageAttachment(finalLink, `${text}.png`)

        message.channel.send({ files: [attach]})
    
 }
 
};  
