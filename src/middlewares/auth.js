const httpStatus = require('http-status')
const jwt = require('jsonwebtoken')
const responseCodes = require('../common/utils/responseCodes')
const { jwtc } = require('../config/config')

const authHandler = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.status(httpStatus.CONFLICT).send({ status: httpStatus.CONFLICT, code: responseCodes.AUTHENTICATION_FAILED.value })

    jwt.verify(token, jwtc.secret, (err, user) => {
        console.log(err)
        if (err) return res.status(httpStatus.BAD_REQUEST).send({ status: httpStatus.BAD_REQUEST, code: responseCodes.AUTHENTICATION_FAILED.value })
        req.user = user
        next()
    })
}

module.exports = authHandler