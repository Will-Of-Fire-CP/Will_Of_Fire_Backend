const { Pool } = require("pg")

const connectionString = "postgresql://postgres:j0GBQr7yHVg8ZqpCdKyJ@containers-us-west-155.railway.app:7804/railway"

const pool = new Pool({
    connectionString,
    // database: 'aldair',
    // user: "aldair",
    // password: "a",
});

module.exports = pool;