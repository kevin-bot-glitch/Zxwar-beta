const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'work',
    cooldown: 60000,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const jobs = ["Footballer", "Driver", "Chef", "Doctor", "Cosplayer", "kuli bangunan"]

        const job = Math.floor(Math.random() * jobs.length);
        const coins = Math.floor(Math.random() * 100) + 1;

        message.channel.send({
            content: `You worked as a ${jobs[job]} and earned **${coins}** Coins`
})
        client.add(message.author.id, coins);
    }
}