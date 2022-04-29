const { Client } = require("pg");
const express = require("express");
const app = express();

const client = () => {
  return new Client({
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    host: process.env.HOSTDB,
    port: parseInt(process.env.PORTDB, 10),
    database: process.env.DATABASE,
  });
};

module.exports = client;
