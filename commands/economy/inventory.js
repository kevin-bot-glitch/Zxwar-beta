const { Client, Message, MessageEmbed } = require('discord.js');
const inventory = require("../../database/models/inventory")
module.exports = {
    name: 'inventory',
    aliases: ['inv'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        inventory.findOne({ User: message.author.id }, async(err, data) => {
            if(!data) return message.channel.send(`The inventory is empty!`)
            const mappedData = Object.keys(data.Inventory).map((key) => {
                return `${key}(${data.Inventory[key]})`
            }).join("\n\n");
            message.channel.send({ embeds:
                [new MessageEmbed()
                .setAuthor(`Inventory`, client.user.displayAvatarURL())
.setThumbnail(client.user.displayAvatarURL())                .setDescription(`Items: ${mappedData}`)
.setFooter(`${client.prefix}buy <items> without <>`, client.user.displayAvatarURL())								 
.setColor(client.embedcolor)]}
            )
        });
    }
}