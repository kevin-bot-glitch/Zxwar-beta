const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
  name: "findemoji",
  aliases: ["finde"],
  category: "admin",
  description: "Steals Emoji from Other Servers to ur Server.",
	BotPerms: ["MANAGE_EMOJIS"],
  UserPerms: ["MANAGE_EMOJIS"],

  run: async (client, message, args) => {
    let pages = new MessageActionRow().addComponents(
      new MessageButton()
        .setStyle("PRIMARY")
        .setLabel("❮ BACK")
			  
        .setCustomId("previous"),
      new MessageButton()
        .setStyle("PRIMARY")
        .setLabel("NEXT ❯")
        
        .setCustomId("next"),
      new MessageButton()
        .setStyle("SUCCESS")
        .setLabel("ADD")
        .setEmoji(client.emotes.yes)
        .setCustomId("add"),
      new MessageButton()
        .setStyle("DANGER")
        .setLabel("CANCEL")
			  .setEmoji(client.emotes.error)
        .setCustomId("cancel")
    );
    let emojis = await fetch("https://emoji.gg/api/").then(res => res.json());
    const q = args
      .join(" ")
      .toLowerCase()
      .trim()
      .split(" ")
      .join("_");
    let matches = emojis.filter(s => s.title == q || s.title.includes(q));

    

    let page = 0;
    let i0 = 0;
    let i1 = 10;

    if (!matches.length) return message.channel.send({ content: `${client.emotes.error} • No Results found for ${args.join(
          " "
        )}!` });
    let embed = new MessageEmbed()
      .setAuthor(matches[page].title, client.user.displayAvatarURL())
      .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
      .setColor(client.embedcolor)
      .setImage(matches[page].image)
      .setFooter(`Emoji ${page + 1}/${matches.length}`);
    let msg = await message.channel.send({
      embeds: [embed],
      components: [pages]
    });

    let filter = i => i.user.id === message.author.id;
    let collector = msg.createMessageComponentCollector({
      filter
    });

    collector.on("collect", async i => {
      if (i.customId === "previous") {
        i0 = i0 - 10;
        i1 = i1 - 10;
        page = page - 1;
        if (i1 < 9) return msg.delete();
        let embed = new MessageEmbed()
          .setAuthor(matches[page].title, client.user.displayAvatarURL())
          .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
          .setColor(client.embedcolor)
          .setImage(matches[page].image)
          .setFooter(`Emoji ${page + 1}/${matches.length}`);

        msg.edit({ embeds: [embed] });
      }
      if (i.customId === "next") {
        i0 = i0 + 10;
        i1 = i1 + 10;
        page = page + 1;

        if (i1 > matches.length + 10) return msg.delete();
        if (!i0 || !i1) return msg.delete();
        let embed = new MessageEmbed()
          .setAuthor(matches[page].title, client.user.displayAvatarURL())
          .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
          .setColor(client.embedcolor)
          .setImage(matches[page].image)
          .setFooter(`Emoji ${page + 1}/${matches.length}`);

        msg.edit({ embeds: [embed] });
      }
      if (i.customId === "add") {
        const res = matches[page];
        let created;
        
        try {
          created = await message.guild.emojis.create(res.image, res.title);
   } catch {
                    message.channel.send(`Unable to add ${res.title}.`, { message });
        }
        let embed = new MessageEmbed()
          .setColor(client.embedcolor)
          .setDescription(
            `${client.emotes.yes} • successfuly added ${created}!`
          );

        msg.edit({ embeds: [embed], components: [] });
        
      }
      if (i.customId === "cancel") {
        msg.delete();
        return message.channel.send("Cancelled command.", { message });
      }
    });
  }
};