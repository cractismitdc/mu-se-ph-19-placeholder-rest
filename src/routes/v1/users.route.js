const express = require('express')

//import controller
const userController = require('../../controller/user.controller')


// user router
const router = express.Router();
router
    .get('/lists', userController.getUsers)
    .post('/signup', userController.createUser)
    .get('/:id', userController.getUser)
    .put('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser)

module.exports = router