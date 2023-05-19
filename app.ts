const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;

var server = express()


var PORT = 3000

server.use(express.static('public'))

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})