const { Client, Message, MessageEmbed } = require('discord.js');
const Schema = require('../../database/models/welcome');
  
module.exports = { 
    name: 'welcome',
    description: 'set the welcome canvas',
    UserPerms: ["ADMINISTRATOR"],
    /** 
    * @param {Client} client 
    * @param {Message} message 
    * @param {String[]} args 
    */
    run: async(client, message, args) => {
let values = ["set","reset"]
			if(!args.length || !values.includes(args[0].toLowerCase())) {
            return message.reply({content: `${client.emotes.error} • **Please supply a valid type! \`${values.join("`, `")}\`**`})
        }
			
			if(args[0] === "set") {
const channel = message.mentions.channels.first();
       if(!channel) return message.reply('Please tell me a welcome channel!');

       Schema.findOne({ Guild: message.guild.id}, async(err, data) => {
           if(data){
               data.Channel = channel.id;
               data.save();
           } else {
               new Schema({
                   Guild: message.guild.id,
                   Channel: channel.id,
               }).save();
           }
           message.reply(`${channel} has been set as the Welcome Channel of this server!`)
       })
}
		}
}