const discord = require("discord.js");
const random = require("something-random-on-discord").Random

module.exports = {
  name: "hug",
  category: "fun",
  description: "Hug someone",
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()

    if(!target){
      return message.reply(client.emotes.error + "• please mention someone to hug!")
    }
    
    let data = await random.getAnimeImgURL("hug")
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor(client.embedcolor)
    .setFooter(`${message.author.username} hugs ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send({ embeds: [embed] });
  }
};