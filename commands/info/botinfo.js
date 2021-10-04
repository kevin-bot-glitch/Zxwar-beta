const { Client, MessageEmbed, Message } = require("discord.js");

module.exports = {
	name: "botinfo",
	aliases: ["stats"],
	run: async(client, message, args) => {

let ram = ((process.memoryUsage().heapUsed / 1024 / 1024) + (process.memoryUsage().heapTotal / 1024 / 1024)).toFixed(2);
                
		const about = new MessageEmbed()
			.setAuthor(client.user.username, client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`> ${client.emotes.exclamation} • **General**\n**- Name:** ${client.user.username}\n**- Version:** v2.0.0\n**- Node.js:** v16\n\n> ${client.emotes.exclamation} • **Counting**\n**- Servers Count:** ${client.guilds.cache.size}\n**- All Users Count:** ${client.users.cache.size}\n**- All Channels Count:** ${client.channels.cache.size}\n**- Commands Count:** ${client.commands.size}\n\n> ${client.emotes.exclamation} • **Engine**\n**- Platform:** not know\n**- Ram Usage:** ${ram}Mb\n\n> **💳 • Credits**\n**Thanks to Lota**\n**- Devs**\n\`\`\`\nbdrxzzzz#9090\nThe Gonds#2286 (Contributor)\`\`\`\n**Emoji Server**\n[1](https://discord.gg/WpFxyXZSUX) | [2](https://discord.gg/Q3PwE9Gu9t) | [3](https://discord.gg/MYV7RmmDfD) | [4](https://discord.gg/DMkrUhe2mf) | [5](https://discord.gg/MwtbbCwgWQ)`)
    .setColor(client.embedcolor)
    .setFooter(client.footer, client.user.displayAvatarURL())
    .setTimestamp()
		
	message.reply({ embeds: [about] })
	}
};