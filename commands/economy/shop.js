const { Client, Message, MessageEmbed } = require('discord.js');
const items = require("../../structure/shopItems")
module.exports = {
    name: 'shop',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(items.length === 0) return message.reply("The shop is closed!")

        const shopList = items
        .map((value, index) => {
            return `**${index+1})** ${value.item} | ${value.price} Coins`
        });


			const shopManual = new MessageEmbed()
			.setAuthor(`Shop`, client.user.displayAvatarURL())
				.setThumbnail(client.user.displayAvatarURL())
			.setDescription(`**• Name Items:-** Sword\n**• Price:-** 900 ${client.emotes.coin}

      **• Name Items:-** House\n**• Price:-** 2000 ${client.emotes.coin}`)
			
        message.channel.send({ embeds: [shopManual] })
    }
}