const express = require('express');
const reqDbSales = require('../req_db/sales');
const app = express.Router();

app.get('/all',reqDbSales.getAll);
app.get('/',reqDbSales.getServices);
app.post('/add',reqDbSales.postAdd);
app.put('/update',reqDbSales.putServices);
app.delete('/delete', reqDbSales.delete)

module.exports =   app;