const Discord = require("discord.js");
const client = new Discord.Client({
    intents: 32767,
});
const express = require("express")
const app = express();
const qdb = require("quick.db")


app.get('/', (req,res) => {
  res.send('Hola Buto');
});

app.listen(3000, () => {
  console.log('Bot Listo Papu');
}); //Esto pal uptimebot

client.on("ready", () => {
    console.log("Estoy listo!");
	  console.log(`I am running Node ${process.version}!`);
 });

module.exports = client;

client.comandos = new Discord.Collection();

require("./handler")(client);

client.snipes = new Map();  
client.on('messageDelete', message => {
  client.snipes.set(message.channel.id,{
    content: message.content,
    delete: message.author,
    canal: message.channel
  })
});

client.on('ready', () => {
  const estados = ["Mob Psycho 100", `${client.guilds.cache.size} servidores`, "Prefix m!"];
setInterval(() => {
                    client.user.setPresence({ activities: [{ name: estados[Math.floor(Math.random() * estados.length)],  type: "WATCHING" }], status: 'online' })
                }, 10000) 
  })
client.on('shardError', (e, s) => {
    console.log('')
})
process.on('unhandledRejection', error => {
  console.error(error);
});
client.login("ODQ0NzQzMjE2Njg3NjExOTE3.YKW2bQ.rPq9RZuDLcWZ9fm-4JPuS6xQD6k"); 
