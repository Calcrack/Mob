const Discord = require('discord.js');

module.exports = {
    name: "shop",
    aliases: ["tienda"],
    run: async (client, message, args) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("Tienda")
      .setDescription("Bienvenidos a la tienda\nPuedes comprar los items con m!buy <item>")
      .setImage("https://media.discordapp.net/attachments/916789924919922750/929485866391470090/Oiy8Vq1.gif")
        .setColor("GREEN")
      const embed2 = new Discord.MessageEmbed()
      .setTitle("Herramientas")
      .setDescription("Bienvenidos a la seccion de herramientas aca podras comprar herramientas para ganar mas dinero, para comprar usa m!buy <item>\n**Herramientas:**")
      .setFields({ name: "<:pescar:929096311507128341> **Caña** - 3,000<:Moneda:925044214901907487>", value: "Pesca en el rio"}, { name: "<:espadad:926303440580263976> **Espada** - 5,000<:Moneda:925044214901907487>", value: "Caza mounstruos con tu espada"}, { name: "<:hachad:926303601658314753> **Hacha** - 7,500<:Moneda:925044214901907487>", value: "Tala madera con tu hacha"}, { name: "<:picod:926303221469835294> **Pico** - 15,000<:Moneda:925044214901907487>", value: "Caza mounstruos con tu espada" })
      .setColor("RANDOM")
      const embed3 = new Discord.MessageEmbed()
      .setTitle("Roles")
      .setDescription("Bienvenidos a la seccion de roles aca podras comprar roles con los cuales puedes ganar mas dinero, para comprar usa m!buy <item>\n**Roles:**")
      .setFields({ name: "<:cofre:929110800952619099> **Humilde** - 550<:Moneda:925044214901907487>", value: "Esta caja puede contener dinero"}, { name: "<:barril:929112153745686548> **Trabajador** - 1,500<:Moneda:925044214901907487>", value: "Con este rol puedes trabajar"}, { name: "<:cofredelend:929110833714319380> **Empresario** - 2,500<:Moneda:925044214901907487>", value: "Con este rol puedes tener empresas"}, { name: "<:shulker:929114255410757673> **Millonario** - 1,000,000<:Moneda:925044214901907487>", value: "Con este rol prácticamente eres millonario y de los únicos con el rol" })
      .setColor("RANDOM")
      const button = new Discord.MessageActionRow()
        .addComponents(
      new Discord.MessageButton()
        .setStyle("SECONDARY")
        .setCustomId("herramienta")
        .setEmoji("<:espadad:926303440580263976>"),
      new Discord.MessageButton()
        .setStyle("SUCCESS")
        .setCustomId("inicio")
        .setEmoji(`<:Libro:929474276489314304>`),);
         const m = await message.channel.send({
      embeds: [embed],
      components: [button],
    });  
        const collector = m.createMessageComponentCollector({
      filter: async (i) => {
        if (i.user.id === message.author.id) return true;
        else {
          await i.reply({ content: "No puedes usar esto", ephemeral: true });
          return false;
        }
      },
      time: 500000,
    });

    collector.on(`collect`, (i) => {
      const id = i.customId;

      if (id === "herramienta") {
        i.update({ embeds: [embed2], components: [button] });
      }
      if (id === "inicio") {
        i.update({ embeds: [embed], components: [button] });
      }});    
    }
};
