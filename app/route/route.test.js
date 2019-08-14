const express  = require('express');
const app = express.Router();
const test_controller = require('./../controllers/controller.test')
app.post('/create',test_controller.create)
app.get('/findAll',test_controller.findAll)
module.exports = app;