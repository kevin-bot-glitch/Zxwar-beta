const { Client, MessageEmbed, Message, MessageActionRow, MessageSelectMenu, MessageMenuOption, Interaction, } = require("discord.js");
const fs = require("fs");

module.exports = {
	name: "commands",
	aliases: ["command", "cmd"],
	
	run: async(client, message, args) => {
const prefix = client.prefix; 
		if(!args.length) {
        

			
		const commands = new MessageEmbed()
		.setAuthor(`Commands`, client.user.displayAvatarURL())
		.setColor(client.embedcolor)
		.setThumbnail(client.user.displayAvatarURL())
    .setImage(`https://media.discordapp.net/attachments/890506365284548618/892036043413536789/standard_1.gif`)
		.setDescription(`>>> This Command List **${client.user.username}**, Bot Prefix Defalut \`${prefix}\` Use: \`${prefix}<command name>\` without \`<>\` to use command\n\n**${client.emotes.link} [Invite Bot](https://discord.com/oauth2/authorize?client_id=787158406939148298&permissions=4294967287&scope=bot%20applications.commands) | [Website](https://zxwar.ml) | [Donate](https://trakteer.id/badriian24)**`)
		.addField(`${client.emotes.info} | Info`, '`help`, `commands`, `invite`, `ping`, `imdb`, `npm`, `maps`, `playstore`, `weather`, `emojiinfo`')
.addField(`${client.emotes.mod} | Moderation`, '`ban`, `kick`, `addemoji`, `slowmode`, `autorole`, `addrole`, `removerole`, `clear`, `embedcreator`')
.addField(`${client.emotes.utils} | Utility`, '`afk`, `remind`, `translate`')
.addField(`${client.emotes.exclamation} | Interaction`, '`baka`, `smug`, `waifu`')
.addField(`${client.emotes.music} | Music`, '`play`, `stop`')
.addField(`${client.emotes.fun} | Fun`, '`tweet`, `joke`, `hug`, `affect`, `beautiful`, `blur`, `brighten`')
.addField(`${client.emotes.games} | Minigames`, '`rps`, `akinator`, `snake`, `fasttype`, `guessthenumber`')
.addField(`${client.emotes.coin} | Economy`, '`work`, `balance`, `transfer`, `shop`, `inventory`, `buy`, `daily`')
.addField(`${client.emotes.settings} | Settings`, '`setprefix`, `welcome`')
.addField(`${client.emotes.bot} | Bot`, '`botinfo`, `report`, `suggestbot`')
.addField("--------------------------------------------", `can you see me? no you no see me\n**--------------------------------------------**`)
		.setTimestamp()
		.setFooter(client.footer, client.user.displayAvatarURL())

			
const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Choose...')
					.addOptions([
						{
							label: 'General',
							description: 'click to see general selection!',
							value: 'first_option',
							emoji: client.emotes.exclamation
						},
						{
							label: 'Statistic',
							description: 'click to see statistic selection',
							value: 'tengah_option',
							emoji: client.emotes.exclamation
						},
						{
							label: 'Info',
							description: 'click to see info selection',
							value: 'tengah1_option',
							emoji: client.emotes.info						
						},
						{
							label: 'Moderation',
							description: 'click to see moderation selection',
							value: 'second_option',
							emoji: client.emotes.mod						
						},
					]),
			); 



	 message.reply({ embeds:[commands], components: [row] })
							

} else {
const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.get(client.aliases.get(args[0]));    
      
        
        if (!command) return message.channel.send({
         content: `**${client.emotes.error} • Invalid command. Use \`${prefix}help\` to see all commands in a category.**`
        });
      

      const emb3 = new MessageEmbed()
        .setAuthor(`Commands Details`, client.user.displayAvatarURL())
				.setThumbnail(client.user.displayAvatarURL())
				.setDescription(`>>> **Name:** ${command.name? `\`${command.name}\`` : "Not Provided"}\n**Description:** ${command.description? `\`${command.description}\`` : "Not know"}\n**Aliases:** ${command.aliases? `\`${command.aliases.join(" ")}\`` : "No Aliases"}\n**Usage:** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : `\`${prefix}${command.name}\``}`)
  .setColor(client.embedcolor)
			.setFooter(client.footer, client.user.displayAvatarURL())
.setTimestamp()
  message.channel.send({
      embeds: [emb3]
  })
    }



    

    		
	}
}