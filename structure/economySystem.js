const client = require("../index");
const coinsSchemaa = require("../database/models/economy");

client.bal = (id) => new Promise(async ful => {
    const data = await coinsSchemaa.findOne({ id });
    if(!data) return ful(0);
    ful(data.coins)
})

client.add = (id, coins) => {
    coinsSchemaa.findOne({ id }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.coins += coins;
        } else {
            data = new coinsSchemaa({ id, coins })
        }
        data.save();
    })
}

client.rmv = (id, coins) => {
    coinsSchemaa.findOne({ id }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.coins -= coins;
        } else {
            data = new coinsSchemaa({ id, coins })
        }
        data.save();
    })
}