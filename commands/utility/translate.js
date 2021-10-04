const {Client, Message, MessageEmbed } = require ('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports = {
  name: "translate",
  category: "main",
  description: "google translate",
  run: async (client, message, args) => {
    let prefix = client.prefix;
        try {
      const query = args.slice(1).join(" ");
    if (!query) return message.reply(`${client.emotes.error} • Dont leave this blank! Try this: \`${prefix}translate id Hello! I'm Zxwar!\``)
const arg = args[0]

    const translated = await translate(query, {to: `${arg}`});
    const embed = new MessageEmbed()
    .setTitle("Translated!")
    .addField("Your Query", `\`\`\`fix\n${query}\`\`\``)
    .addField('Selected Language', `\`\`\`fix\n${arg}\`\`\``)
    .addField('Result', `\`\`\`fix\n${translated.text}\`\`\``)
    .setFooter(client.footer)
    .setColor(client.embedcolor)
    message.channel.send({ embeds: [embed] })

    } catch (error) {
      return message.channel.send(`Your question is invalid! Try this: \`${prefix}translate <language> <query>\``)
      .then(() => console.log(error));
    }
  }
}