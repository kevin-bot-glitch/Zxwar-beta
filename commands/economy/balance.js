const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'balance',
    aliases: ['bal','cash','money','coin','coins'],
    description: 'Check your balance',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.member;

        const bal = await client.bal(user.id);

if (user) {
const balance = new MessageEmbed()
            .setAuthor(`${user.user.tag}'s Balance`, user.user.displayAvatarURL())
	.setThumbnail(user.user.displayAvatarURL())
            .setDescription(`> **Cash:** ${bal} ${client.emotes.coin}\n\n**[\`Vote Me!\`](https://top.gg/bot/787158406939148298)**`)
            .setColor(client.embedcolor)
.setFooter(client.footer, client.user.displayAvatarURL())
			.setTimestamp()
        message.channel.send({ embeds:
            [balance]}
        );
	} else {
      return message.channel.send(`${client.emotes.error}** • Account not found!**`);
    }

    }
}