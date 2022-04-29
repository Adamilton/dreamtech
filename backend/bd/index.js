const { application } = require('express');
const express = require('express');
const routes = require('./src/routes');


const app = express();



app.use(express.json())
app.use(express.urlencoded({ extended: true}))



app.use(require('./src/routes'))

app.listen(3010, console.log("Funcionou"))
