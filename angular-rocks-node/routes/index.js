const express = require('express');
const route = express.Router();
const controller = require('../controllers/indexController');

//localhost:3000
route.get('/', controller.viewList);
//localhost:3000/:band_id
route.get('/:band_id', controller.viewBand)
//localhost:3000/delete/:band_id
route.post('/delete', controller.deleteBand)

module.exports = route;