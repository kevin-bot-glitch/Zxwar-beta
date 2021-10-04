const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "tweet",
    aliases: ["bidden"],
    description: "tweet something on twitter!",
    category: "fun",
    usage: "tweet <txt>",
    run: async(client, message, args) => {

      if(!args[0]) return message.reply({content: `Please text something to tweet!`})

        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
        .then((res) => res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setAuthor("Tweeted!", "https://cdn.discordapp.com/emojis/861863654097682452.png?v=1")
            .setImage(`${data.message}`)
            .setColor('BLUE')
            .setTimestamp()
            message.channel.send({embeds: [embed]})
            message.react("<:icons_twitter:890779581307551755>")
        })
    }
} 