const pg = require('pg');

const Client = pg.Client;

const config = {
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
};

const client = new Client(config);

client.connect();

module.exports = client;
