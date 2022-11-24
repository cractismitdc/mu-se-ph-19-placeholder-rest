const httpStatus = require("http-status")
const { SleepLogService } = require("../services")
const catchAsync = require('../common/utils/catchAsync')
const responseCodes = require('../common/utils/responseCodes')

module.exports.getAllSleepLog = catchAsync(async (req, res) => {
    // const options = req.query
    const sleepLogData = await SleepLogService.getAllSleepLog(req.query);
    res.status(httpStatus.OK).send({ status: httpStatus.OK, code: responseCodes.RETRIEVE_RECORD_LIST.value, data: sleepLogData })
})

module.exports.createSleepLog = catchAsync(async (req, res) => {
    const sleepLogData = await SleepLogService.createSleepLog(req.body)
    res.status(httpStatus.CREATED).send({ status: httpStatus.CREATED, code: responseCodes.CREATE_RECORD_SUCCESS.value, data: sleepLogData })
})

module.exports.getSleepLog = catchAsync(async (req, res) => {
    const sleepLogData = await SleepLogService.getSleepLog(req.params.id)
    res.status(httpStatus.FOUND).send({ status: httpStatus.FOUND, code: responseCodes.RECORD_FOUND.value, data: sleepLogData })
})

module.exports.updateSleepLog = catchAsync(async (req, res) => {
    const sleepLogData = (await SleepLogService.updateSleepLog(req.params.id, req.body))[1].get()
    res.status(httpStatus.OK).send({ status: httpStatus.OK, code: responseCodes.UPDATE_RECORD_SUCCESS.value, data: { ...sleepLogData } })
})

module.exports.deleteUser = catchAsync(async (req, res) => {
    const sleepLogData = await SleepLogService.deleteSleepLog(req.params.id, req.body)
    res.status(httpStatus.OK).send({ status: httpStatus.OK, code: responseCodes.DELETE_RECORD_SUCCESS.value })
})