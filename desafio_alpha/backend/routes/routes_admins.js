const express = require('express');
const authenticateToken = require('../middleware/authorization');
const reqDbAdmins = require('../req_db/admins_users');
const app = express.Router();

app.get('/all',reqDbAdmins.getAll);
app.post('/login',reqDbAdmins.postLogin);
app.put('register',reqDbAdmins.putUpdate);
app.post('/',reqDbAdmins.postRegister);


module.exports =   app;