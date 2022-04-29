const {Client} = require('pg');

const client = new Client ({
    user:'postgres',
    password:'Dream12',
    host: 'localhost',
    port:5432,
    database:'dreamtech1'
});

// let user = "admin'; DROP DATABASE;  --";
let pass = "";
let query = "SELECT * FROM clients"

client.connect()
.then(() => console.log("Conectado com o Banco"))
.then(() => client.query(query))
.then( results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())

module.exports = client;
