const httpStatus = require("http-status")
const ApiError = require("../../common/utils/ApiError")
const responseCodes = require("../../common/utils/responseCodes")
const { jwtc } = require("../../config/config")
const jwt = require('jsonwebtoken')


const AuthService = {
    // TODO: Authentication for users
    refreshTokens: [],
    login: (req) => {
        console.log(jwtc)
        const { username } = req
        const user = { name: username }

        const accessToken = AuthService.generateAccessToken(user)
        const refreshToken = jwt.sign(user, jwtc.refreshToken)
        AuthService.refreshTokens.push(refreshToken)
        return { accessToken, refreshToken }
    },
    logout: (req) => {
        AuthService.refreshTokens = AuthService.refreshTokens.filter(token => token !== req.token)
    },
    verifyToken: async (rToken) => {
        let accessToken
        if ( !rToken ) AuthService.throwAuthFailed()
        jwt.verify(rToken, jwtc.refreshToken, (err, user) => {
            if ( !rToken ) AuthService.throwAuthFailed()
            accessToken = AuthService.generateAccessToken({ name: user.name })
        })
        return accessToken
    },
    generateAccessToken: (user) => {
        return jwt.sign(user, jwtc.secret, { expiresIn: jwtc.tokenExpiration })
    },
    throwAuthFailed: () => {
        throw new ApiError(
            httpStatus.CONFLICT,
            responseCodes.AUTHENTICATION_FAILED.value,
            responseCodes.DATA_PROCESSING_ERROR.value )
    }
}

module.exports = AuthService