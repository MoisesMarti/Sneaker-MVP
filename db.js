const {Pool} = require('pg');

const client = new Pool({
    user: 'moisesmartinez',
    hostname: 'localhost',
    port: 5432,
    database: 'my_sneakers',
    connectionString: process.env.DATABASE_URL
})

module.exports = client;

