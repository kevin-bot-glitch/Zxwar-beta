const { Client, MessageEmbed, Message } = require("discord.js");

module.exports = {
	name: "help",
	aliases: ["h"],
	run: async(client, message, args) => {
		const prefix = client.prefix;
		const help = new MessageEmbed()
		.setAuthor(`Help`, client.user.displayAvatarURL())
		.setColor(client.embedcolor)
		.setThumbnail(client.user.displayAvatarURL())
		.setDescription(`Hello **${message.author.username}** to view all variable command use \`${prefix}commands\`, to view specific commands use \`${prefix}commands <name/alias>\`\n\n*if you find a bug use the command \`${prefix}report\` or you can join the official zxwar server using \`${prefix}support\`, thx to invite Zxwar Bot in server <a:smug:831728469419360277>*`)
		.setTimestamp()
		.setFooter(client.footer)
		message.channel.send({ embeds:[help] })
	}
}