const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<p style="font-family: Helvetica;">Zxwar Bot</p>')
});

app.listen(3030, () => {
  console.log('Website Online!');
});