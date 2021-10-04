const client = require(`../index`)
const guilds = require(`../database/models/guild`)
const { MessageEmbed } = require("discord.js")

client.on("guildCreate", async  (guild) => {
    await guilds.create({guildId: guild.id})

	const ch = client.channels.cache.get('893846809041055745') 
	const chVc = client.channels.cache.get('893847259026976818')
	chVc.setName(`🌐 Guilds: ${client.guilds.cache.size}`)
const join = new MessageEmbed()
	.setAuthor(`Im Joined a server`)
.setDescription(`> **Server Name:** ${guild.name} (${guild.id})\n> **Server Owner:** \n> **Member Count:** ${guild.memberCount}`)
	.setFooter(`use command b!invite`)
	.setColor(client.embedcolor)
	ch.send({ embeds: [join] })
})