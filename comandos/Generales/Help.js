const Discord = require('discord.js');

module.exports = {
    name: "help",
    aliases: ["ayuda"],
    run: async (client, message, args) => {
          var perms = message.guild.me.permissions.has("SEND_MESSAGES")
      if(!perms) return;
    	const row = new Discord.MessageActionRow()
    	.addComponents(
  new Discord.MessageSelectMenu()
  .setCustomId("menu")
  .setMaxValues(1)    
  .addOptions([
  {
         label: "Diversión",
           value: "diversion",
           description: "Comandos de diversión",
  emoji:"<:shigeo_loco:873344692970991656>"
  }
])
        .addOptions([
  {
         label: "Economia",
           value: "economia",
           description: "Comandos de economía",
       emoji:"<:Moneda:925044214901907487>"
  }
])
.addOptions([
  {
         label: "Interacción",
           value: "interaccion",
           description: "Comandos de interacción",
  emoji:"<:khe:909156172328742954>"
  }
])
  .addOptions([
  {
         label: "Utilidad",
           value: "utilidad",
           description: "Comandos útiles",
       emoji:"<:Reigen:873360417748037663>"
  }
])
.addOptions([
  {
         label: "Moderacion",
           value: "moderacion",
           description: "Comandos de moderacion",
       emoji:"<:Ritsu:873360381995798559>"
  }
])
        .addOptions([
  {
         label: "Principal",
           value: "principal",
           description: "Menu Principal",
       emoji:"<a:arodar:909156051952222238>"
  }
])
  )
  const principal = new Discord.MessageEmbed()
  .setTitle("Menú Principal")
  .setDescription('<:Shigeo_100:873343921953075230>¡Hola! soy Mob un bot multifuncional con comandos de moderacion y diversion<:Shigeo_100:873343921953075230> \n [!Invitame a tu server!](https://discord.com/oauth2/authorize?client_id=844743216687611917&scope=bot%20applications.commands&permissions=2147483647) [¡Publica memes para el bot!](https://reddit.com/r/MobBot) [¡Sitio Web!](https://mobbot.ml)')
  	.setColor("GREEN")
      .setImage("https://media.discordapp.net/attachments/916789924919922750/917535256951803946/MobLT_8_1.gif")

  const economia = new Discord.MessageEmbed()
  .setTitle("Economía")
  .addFields( { name: 'Trabajo', value: '``work - mine - chop - hunt - fish - daily``' }, { name: 'Dinero', value: '``bal - with - dep - pay - rob - top``' }, { name: 'Tienda', value: '``shop - buy - bag``' })
  	.setColor("GREEN")
      .setImage("https://media.discordapp.net/attachments/916789924919922750/932790437838749696/1_1.gif")

 const diversion = new Discord.MessageEmbed()
      .setTitle("Diversión")
      .addFields( { name: 'Imagen', value: '``meme - ship - gay - trigger - trash\n\nstonks - notstonks - confusedstonks\n\ncomunista - sdlg - void - dame - cagaste\n\nbless - pet - anonymous - logro``'})
      .setImage("https://media.discordapp.net/attachments/916789924919922750/917535826236276806/20211206_165445.gif")
      .setColor("GREEN")
      const interaccion = new Discord.MessageEmbed()
      .setTitle("Interacciones")
      .addFields( { name: 'Anime', value: '``hug - kiss - slap - punch - kill - pat\n\nrun - sape - shot - tickle``' }, {name: 'Jojos', value: '``dio - theworld - aplanadora - diooo\n\nnigerundayo - ohno - tequila - caesar\n\nora - lero``'})
      .setImage("https://media.discordapp.net/attachments/916789924919922750/917536062878916649/20211206_165516.gif")
      .setColor("GREEN")
      const utilidad = new Discord.MessageEmbed()
      .setTitle("Utilidad")
      .addFields( { name: 'Generales', value: '``say - afk - userinfo``' }, { name: 'Imagen', value: '``avatar - jumbo``' })
      .setImage("https://media.discordapp.net/attachments/916789924919922750/917535284848128040/2_1.gif")
      .setColor("GREEN")
      const moderacion = new Discord.MessageEmbed()
      .setTitle("Moderacion")
      .addFields( { name: 'Generales', value: '``purge``' }, { name: 'Warns', value: '``warn - warns - delwarn - clearwarns``' })
      .setImage("https://media.discordapp.net/attachments/916789924919922750/917536018025025556/226_12.mp4_1.gif")
      .setColor("GREEN")

			
      const m = await message.channel.send({ embeds: [principal], components: [row]})
      const ifilter = i => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })
      collector.on("collect", async i => {
      	if(i.values [0] === "diversion"){
      		await i.deferUpdate()
      		i.editReply({ embeds: [diversion], components: [row] })
  } 
  if(i.values [0] === "interaccion"){
  	await i.deferUpdate()
  	i.editReply({ embeds: [interaccion], components: [row] })
  }
  if(i.values [0] === "utilidad"){
  	await i.deferUpdate()
  	i.editReply({ embeds: [utilidad], components: [row] })
  }
  if(i.values [0] === "moderacion"){
  	await i.deferUpdate()
  	i.editReply({ embeds: [moderacion], components: [row] })
  }
  if(i.values [0] === "economia"){
  	await i.deferUpdate()
  	i.editReply({ embeds: [economia], components: [row] })
  }
  	if(i.values [0] === "principal"){
  	await i.deferUpdate()
  	i.editReply({ embeds: [principal], components: [row] })
  }		    
			})
     }
        }
