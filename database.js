const mariadb = require("mariadb");
require('dotenv').config()
const pool = mariadb.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  port: 3306,
  database: "etis",
});

module.exports = Object.freeze({ pool:pool });
