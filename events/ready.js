const client = require('../index')
const prefix = client.prefix;

client.on('ready', () => {
	console.log(`${client.user.tag} online`)
	const status = [
	  `BordKeys | b!help`,
    `BordKeys | ${client.guilds.cache.size} Servers`,
    `BordKeys | ${client.users.cache.size} users`
  ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], { type: "PLAYING" }) //You Can Set The Type To PLAYING/WATCHING/COMPETING/LISTENING.
  }, 10000)
 
});