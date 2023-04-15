const { Pool } = require("pg");

const pool = new Pool({
  user: "doadmin",
  host: "Arai-dev-db-do-user-6015580-0.b.db.ondigitalocean.com",
  database: "defaultdb",
  password: "AVNS_-9sh-ZnQrYT-FlRgtYx",
  port: 25060,
});

module.exports = pool;
