module.exports = {
	name: "embedcreator",
  aliases: ["embed"],
	run: async(client, message, args) => {
const suggy = require("suggy");

suggy.embedder(message, message.mentions.channels.first())
  }
}