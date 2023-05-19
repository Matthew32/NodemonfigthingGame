const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;

var server = express()

server.use(express.static('public'))

server.listen(port, function () {
  console.log('Listening on port', port)
})