const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const helpers = require('./api/helpers/mongoConnection');

app.use(express.json());
app.use(cors())

let dbConnection = async () => {
    global.db_connection = await helpers.dbConnection(process.env.MONGO_URI, process.env.DB_NAME)
}

dbConnection()

app.use('/', require('./api/routes'))
module.exports = app;