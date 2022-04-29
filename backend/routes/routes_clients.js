const express = require('express');
const authenticateToken = require('../middleware/authorization');
const reqDbClients = require('../req_db/clients');
const app = express.Router();

app.get('/all',reqDbClients.getAll);
app.post('/login',reqDbClients.postLogin);
app.put('/update',reqDbClients.putUpdate);
app.post('/register',reqDbClients.postRegister);

module.exports =   app;