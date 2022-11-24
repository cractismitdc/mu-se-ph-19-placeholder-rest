const httpStatus = require("http-status")
const { UsersService } = require("../services")
const catchAsync = require('../common/utils/catchAsync')
const responseCodes = require('../common/utils/responseCodes')

module.exports.getUsers = catchAsync(async (req, res) => {
    // const options = req.query
    const userData = await UsersService.listUsers()
    res.status(httpStatus.OK).send({ status: httpStatus.OK, code: responseCodes.RETRIEVE_RECORD_LIST.value, data: userData })
})

module.exports.createUser = catchAsync(async (req, res) => {
    const userData = await UsersService.createUser(req.body)
    res.status(httpStatus.CREATED).send({ status: httpStatus.CREATED, code: responseCodes.CREATE_RECORD_SUCCESS.value, data: userData })
})

module.exports.getUser = catchAsync(async (req, res) => {
    const userData = await UsersService.getUser(req.params.id)
    res.status(httpStatus.FOUND).send({ status: httpStatus.FOUND, code: responseCodes.RECORD_FOUND.value, data: userData })
})

module.exports.updateUser = catchAsync(async (req, res) => {
    const userData = (await UsersService.updateUser(req.params.id, req.body))[1].get()
    res.status(httpStatus.OK).send({ status: httpStatus.OK, code: responseCodes.UPDATE_RECORD_SUCCESS.value, data: { ...userData } })
})

module.exports.deleteUser = catchAsync(async (req, res) => {
    const userData = await UsersService.deleteUser(req.params.id, req.body)
    res.status(httpStatus.OK).send({ status: httpStatus.OK, code: responseCodes.DELETE_RECORD_SUCCESS.value })
})