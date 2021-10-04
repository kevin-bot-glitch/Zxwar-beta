const client = require("../index");
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const db = require("../reconDB.js");
const guilds = require("../database/models/guild")
const users = require(`../database/models/users`)
const { owners } = client.config;
const Timeout = client.Timeout;


client.on("messageCreate", async (message) => {
if (message.channel.type.toLowerCase() == 'dm') return;

	//afk
	//afk
	
const guild = await guilds.findOne({guildId: message.guild.id})
    if(!guild) { await guilds.create({guildId: message.guild.id})}

    let prefix = guild ? guild.prefix : "x!"


	if(message.author.bot || !message.guild ) return;
	

        
	
  const mentionRegex = RegExp(`^<@!?${client.user.id}>$`);
    if(message.content.match(mentionRegex)) {
	return message.channel.send(`Hello im **${client.user.username}** my prefix in **${message.guild.name}** is \`${prefix}\` if you can see all my command use \`${prefix}commands\``)
    }
	
    if (
        message.author.bot ||
        !message.guild || !message.content.toLowerCase().startsWith(prefix)
		)
        return;


if(guild.auto_responders.length > 0) {
        guild.auto_responders.map((ar) => {
            if(ar.trigger.toLowerCase() === message.content.toLowerCase()) {
                return message.reply({content: ar.res})
            }
        })
    
    }
	

    const [cmd, ...args] = message.content
        .slice(prefix.length)
        .trim()
			  .toLocaleLowerCase()
        .split(" ");

let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  
if(message.content ===`<@!${client.user.id}>` || message.content ===`<@${client.user.id}>`){
        return message.reply({ content: `**Hello ${message.author.username} my prefix in server is \`${prefix}\`**`, allowedMentions: { repliedUser: true }});
    }
	
if (command) {

if (command.Maintance) {
	if (!owners.includes(message.author.id))
	return message.channel.send(`This command is maintance please wait to fixing a command`)
}
	
if (command.ownerOnly) {
if (!owners.includes(message.author.id))
	return message.channel.send({ content: `${client.emotes.error} • Only **coders** to use command `})
}
	
	if (command.guildOnly && message.channel.type.toLowerCase() == 'dm')
				return message.reply('I can only run this command inside a guild.');

        // User Perms
        if (!message.member.permissions.has(command.UserPerms || [])) return message.channel.send(`You need \`${command.UserPerms || []}\` Permissions`) // Added this

        // Bot Perms
        if (!message.guild.me.permissions.has(command.BotPerms || [])) return message.channel.send(`I need \`${command.BotPerms || []}\` Permissions`)

if (command.cooldown) {
            if (Timeout.has(`${command.name}${message.author.id}`))
                return message.channel.send(
                    `You are on a \`${ms(
                        Timeout.get(`${command.name}${message.author.id}`) - Date.now(),
                        { long: true }
                    )}\` cooldown.`
                );
            command.run(client, message, args);
            Timeout.set(
                `${command.name}${message.author.id}`,
                Date.now() + command.cooldown
            );
            setTimeout(() => {
                Timeout.delete(`${command.name}${message.author.id}`);
            }, command.cooldown);
        } else 
	
				await command.run(client, message, args)
} else {
	if(guild.leveling) {
            if(message.author.bot) return;
            const userOnLevel = await users.findOne({userId: message.author.id, guildId: message.guild.id})
            if(!userOnLevel) { await users.create({userId: message.author.id, guildId: message.guild.id})}
            require(`../functions/leveling`)(message, client)
        }
}

}
					)