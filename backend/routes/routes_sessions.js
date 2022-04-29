const express = require('express');
const authenticateToken = require('../middleware/authorization');
const reqDbSessions = require('../req_db/sessions');
const app = express.Router();

app.get('/all',authenticateToken,reqDbSessions.getAllSessions);
app.post('/register',reqDbSessions.postSessions);
//app.put('/update',reqDbSessions.getRegister)
//app.post('/', reqDbSessions.postClient);
//app.delete('/delete',reqDbSessions.delete)


module.exports =   app;