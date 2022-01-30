const Discord = require('discord.js');

module.exports = { 
  name: 'purge',
  aliases: [],
  run: async (client, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")){
   return message.reply({ content: `No tienes permisos para ejecutar esta acción<:Teruki:873360442775449600>`, allowedMentions: 
   { repliedUser: false } });
}


    const amount = args[0]

    if(!amount || isNaN(amount))
      return message.reply(
        `${
amount == undefined ? "Escribe" : amount
        } no es un numero valido<:MobLechita:873724024503549992>`
      );
    const amountParsed = parseInt(amount);
    if(amount < 1 ) return message.reply("elige un numero mayor a 0")
    if(amountParsed > 100)
      return message.reply("tu no puedes borrar mas de 100 mensajes!");
    
message.channel.bulkDelete(amountParsed, true);

    const msg = await message.channel.send(`Se han borrado ${amountParsed} mensajes<:Ritsu:873360381995798559>`).then(msg => setTimeout(() => msg.delete(), 5000))

  }
       } 
