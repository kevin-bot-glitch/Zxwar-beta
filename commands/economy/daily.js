const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'daily',
    cooldown: 1000*60*60*24,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const jobs = ["Footballer", "Driver", "Chef", "Doctor", "Cosplayer"]

        const job = Math.floor(Math.random() * jobs.length);
        const coins = Math.floor(Math.random() * 500) + 200;

        message.channel.send({ embeds:
            [new MessageEmbed()
            .setTitle(`Earned Coins`)
						 .setColor(client.embedcolor)
            .setDescription(`You have got **${coins}** Coins, Come back tomorrow again to claim your daily reward!`)]}
        )
        client.add(message.author.id, coins)
    }
}