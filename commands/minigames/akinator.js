module.exports = {
	name: "akinator",
  aliases: ["aki"],
  run: async(client, message, args) => {
const akinator = require('discord.js-akinator')
    
    akinator(message, client, "en");
}
}