const httpStatus = require("http-status")
const { BodyStateServices } = require("../services")
const catchAsync = require('../common/utils/catchAsync')
const responseCodes = require('../common/utils/responseCodes')

module.exports.getAllBodyState = catchAsync(async (req, res) => {
    // const options = req.query
    const bodyStateData = await BodyStateServices.getAllBodyState(req.query);
    res.status(httpStatus.OK).send({ status: httpStatus.OK, code: responseCodes.RETRIEVE_RECORD_LIST.value, data: bodyStateData })
})

module.exports.createBodyState = catchAsync(async (req, res) => {
    const bodyStateData = await BodyStateServices.createBodyState(req.body)
    res.status(httpStatus.CREATED).send({ status: httpStatus.CREATED, code: responseCodes.CREATE_RECORD_SUCCESS.value, data: bodyStateData })
})

module.exports.getBodyState = catchAsync(async (req, res) => {
    const bodyStateData = await BodyStateServices.getBodyState(req.params.id)
    res.status(httpStatus.FOUND).send({ status: httpStatus.FOUND, code: responseCodes.RECORD_FOUND.value, data: bodyStateData })
})

module.exports.updateBodyState = catchAsync(async (req, res) => {
    const bodyStateData = (await BodyStateServices.updateBodyState(req.params.id, req.body))[1].get()
    res.status(httpStatus.OK).send({ status: httpStatus.OK, code: responseCodes.UPDATE_RECORD_SUCCESS.value, data: { ...bodyStateData } })
})

module.exports.deleteBodyState = catchAsync(async (req, res) => {
    const bodyStateData = await BodyStateServices.deleteBodyState(req.params.id, req.body)
    res.status(httpStatus.OK).send({ status: httpStatus.OK, code: responseCodes.DELETE_RECORD_SUCCESS.value })
})