const express = require('express');
const route = express.Router();
const indexController = require('../controllers/indexController');

//localhost:3000
route.get('/', indexController.viewList);

module.exports = route;