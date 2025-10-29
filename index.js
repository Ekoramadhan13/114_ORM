const express = require('express');
const app = express();
const port = 3000;
const db = require('./models');
const komik = require('./models/komik');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log('Server started on port 3000');

});
