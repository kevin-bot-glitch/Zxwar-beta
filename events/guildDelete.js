const client = require(`../index`)
const guilds = require(`../database/models/guild`)
const { MessageEmbed } = require("discord.js")

client.on("guildDelete", async  (guild) => {
    await guilds.findOneAndReplace({guildId: guild.id})

const ch = client.channels.cache.get('893846809041055745') 
const chVc = client.channels.cache.get
('893847259026976818')
	chVc.setName(`🌐 Guilds: ${client.guilds.cache.size}`)
	const leave = new MessageEmbed()
	.setAuthor(`Im Leave a server`)
.setDescription(`> **Server Name:** ${guild.name} (${guild.id})\n> **Server Owner:** \n> **Member Count:** ${guild.memberCount}`)
.setColor("RED")
	.setFooter(`use command x!invite`)
	ch.send({ embeds: [leave] })
	
})