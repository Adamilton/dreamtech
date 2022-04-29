const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();

const routeClients = require('./routes/routes_clients');
const routeServices = require('./routes/routes_services');
const routeSessions = require('./routes/routes_sessions');
const app = express();
const PORT = 2000;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    optionSuccessStatus: 200,
}));

app.use('/clients',routeClients);
app.use('/services',routeServices);
app.use('/sessions',routeSessions);
//app.use('')

app.listen(PORT, ()=>{ console.log(`PORT = ${PORT}`)});