const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const logger = require('morgan')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(logger('dev'))
require('dotenv').config()
//set up toute
const route_test =  require('./app/route/route.test')
//setup mongoode
const mongoose = require('mongoose')
mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser:true
    },
    ()=>console.log('connect thanh cong')
)
app.use('/test',route_test)
const server = require('http').Server(app)
server.listen(8080)
