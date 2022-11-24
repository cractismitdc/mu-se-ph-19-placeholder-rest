const httpStatus = require("http-status")
const { AuthService } = require("../services")
const catchAsync = require('../common/utils/catchAsync')
const responseCodes = require('../common/utils/responseCodes')

module.exports.login = catchAsync(async (req, res) => {
    const login = AuthService.login(req.body)
    res.status(httpStatus.OK).send({ status: httpStatus.OK, code: responseCodes.LOGIN_SUCCESS.value, data: login })
})

module.exports.logout = catchAsync(async (req, res) => {
    const logout = AuthService.logout(req.body)
    res.status(httpStatus[204]).send({ status: httpStatus[204], code: responseCodes.LOGOUT_SUCCESS.value })
})