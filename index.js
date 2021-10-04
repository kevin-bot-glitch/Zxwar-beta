const { Client, Collection, Intents } = require("discord.js");
const website = require("./website");
const reconDB = require("./reconDB");
const mongoose = require("mongoose");
const guilds = require('./database/models/guild');
const config = require("./configs/config.json");
const { Database } = require('quickmongo');
const neko_life = require("nekos.life");

const client = new Client({
	intents: 32767,
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	allowedMentions: {repliedUser: false},
});

//kalo yg copy paste code dikenakan ntar gw geplak

module.exports = client;

client.utils = require("./utils/main.js")
client.commands = new Collection();
client.snipes = new Map();
client.aliases = new Collection();
client.slashCommands = new Collection();
client.config = require("./configs/config.json");
client.embedcolor = client.config.embedcolor;
client.emotes = require("./configs/emotes.json"); 
client.footer = `Zxwar Bot`;
client.Timeout = new Collection();
client.neko_life = new neko_life();
//prefix

//prefix end
const { Player } = require("discord-music-player")
const player = new Player(client, {
	leaveOnEmpty: false,
})
client.player = player;
client.on("messageCreate", async (message) => {
	const guild = await guilds.findOne({guildId: message.guild.id})
    if(!guild) { await guilds.create({guildId: message.guild.id})}

    client.prefix = guild ? guild.prefix : "x!"
	client.guildQueue = client.player.getQueue(message.guild.id);
})

// replace the files accordingly
    //event

//economy
const economySystem = require("./structure/economySystem.js");
//economy end

require("./handler")(client)

client.login(process.env.TOKEN)