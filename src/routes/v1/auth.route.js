const express = require('express')

// controller
const AuthController = require('../../controller/auth.controller')

const router = express.Router()

router
    .post('/login', AuthController.login)
    .delete('/logout', AuthController.logout)

module.exports = router