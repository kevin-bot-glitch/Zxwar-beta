const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'transfer',
    aliases: ['pay', 'give'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
			let userGive = message.author;
			if (!args[0]) return message.channel.send(client.emotes.error + " • **Please select the transfer object!**");
			let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase()
      );
    if (!user) return message.channel.send(client.emotes.error + " • **Please select the transfer object!**");

const member = await client.bal(userGive.id);
			
if (user.user.id === message.author.id) {
      return message.channel.send({content: `you give **${user.displayName}** ${args[1]} ${client.emotes.coin}.... wait what you give money to you?`});
    }
if (member < args[1]) {
      return message.channel.send({content: `${client.emotes.error} • You dont have a money`});
    }
			message.channel.send({content: `${client.emotes.yes} • You just give **${user.displayName}** ${args[1]} coins`});
			client.add(user.id, args[1])
			client.rmv(userGive.id, args[1])
		}
}