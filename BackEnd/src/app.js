const express = require("express");
const morgan = require("morgan");

require('./db');
const server  = express();
server.name = 'pruebaTecnica';

server.use(express.json());
server.use(morgan("dev"));

server.get("/", (req, res) => {
    res.send("Hello!!!!");
})

module.exports = server;