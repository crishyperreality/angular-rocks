const express = require('express');
const route = express.Router();
const controller = require('../controllers/indexController');

//localhost:3000
route.get('/', controller.viewList);

module.exports = route;