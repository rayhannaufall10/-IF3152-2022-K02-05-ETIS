const mariadb = require("mariadb");
const pool = mariadb.createPool({
  user: "root",
  password: "1234",
  host: "localhost",
  port: 3306,
  database: "etis",
});

module.exports = Object.freeze({ pool:pool });
