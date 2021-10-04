module.exports = {
	name: "ping",
	aliases: ["test"],
  run: async(client, message, args) => {
    message.channel.send(`${client.emotes.ping}** • ${client.ws.ping}ms**`)
}
}