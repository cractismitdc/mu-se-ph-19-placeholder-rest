const express = require('express')

//import controller
const bodyStateController = require('../../controller/bodyState.controller')


// user router
const router = express.Router();
router
    .get('/', bodyStateController.getAllBodyState)
    .post('/', bodyStateController.createBodyState)
    .get('/:id', bodyStateController.getBodyState)
    .put('/:id', bodyStateController.updateBodyState)
    .delete('/:id', bodyStateController.deleteBodyState)

module.exports = router