const express = require('express');
const reqDbServices = require('../req_db/services');
const app = express.Router();

app.get('/all',reqDbServices.getAll);
app.get('/',reqDbServices.getServices);
app.post('/add',reqDbServices.postAdd);
app.put('/update',reqDbServices.putServices);
app.delete('/delete', reqDbServices.delete)


module.exports = app;