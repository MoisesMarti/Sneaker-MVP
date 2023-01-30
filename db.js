const {Pool} = require('pg');

const client = new Pool({
    user: 'moisesmartinez',
    hostname: 'localhost',
    port: 5432,
    database: 'my_sneakers'
})

module.exports = client;