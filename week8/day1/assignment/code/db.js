const Pool = require("pg").Pool

const pool = new Pool({
  user: "postgres",
  password: "Mongoose",
  host: "localhost",
  port: 3005,
  database: "mind"
});

module.exports = pool;
