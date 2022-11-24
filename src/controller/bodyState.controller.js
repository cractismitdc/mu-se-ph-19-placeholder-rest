const httpStatus = require("http-status")
const { BodyStateService } = require("../services")
const catchAsync = require('../common/utils/catchAsync')
const responseCodes = require('../common/utils/responseCodes')

module.exports.getAllBodyState = catchAsync(async (req, res) => {
    // const options = req.query
    const bodyStateData = await BodyStateService.getAllBodyState(req.query);
    res.status(httpStatus.OK).send(bodyStateData)
})

module.exports.createBodyState = catchAsync(async (req, res) => {
    const bodyStateData = await BodyStateService.createBodyState(req.body)
    res.status(httpStatus.CREATED).send(bodyStateData)
})

module.exports.getBodyState = catchAsync(async (req, res) => {
    const bodyStateData = await BodyStateService.getBodyState(req.params.id)
    res.status(httpStatus.FOUND).send(bodyStateData)
})

module.exports.updateBodyState = catchAsync(async (req, res) => {
    const bodyStateData = (await BodyStateService.updateBodyState(req.params.id, req.body))[1].get()
    res.status(httpStatus.OK).send({ ...bodyStateData })
})

module.exports.deleteBodyState = catchAsync(async (req, res) => {
    const bodyStateData = await BodyStateService.deleteBodyState(req.params.id, req.body)
    res.status(httpStatus.OK).send({ status: httpStatus.OK, code: responseCodes.DELETE_RECORD_SUCCESS.value })
})