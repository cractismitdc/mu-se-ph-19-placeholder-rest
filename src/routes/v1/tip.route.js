const express = require('express');

//import controller
const tipController = require('../../controller/tip.controller');

// user router
const router = express.Router();
router
  .get('/', tipController.getTips)
  .get('/:id', tipController.getTip)
  .get('/lists/:sleepcode', tipController.getTipsByQuality);

module.exports = router;
