const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT ?? 3002;

var server = express()

server.use(express.static('public'))

server.listen(port, function () {
  console.log('Listening on port', port)
})