const httpStatus = require('http-status')
const ApiError = require('../../common/utils/ApiError')
const responseCodes = require('../../common/utils/responseCodes')
const { SleepLog } = require('../../models/index')

const SleepLogService = {
    // TODO: CRUD Operations for Sleep Log
    getAllSleepLog: async (options) => {
        console.log("getting list of sleep log")
        return await SleepLog.findAll({
            where: {
                userId: options.userId,
                ...(options.dateOfSleep && {dateOfSleep: options.dateOfSleep}),
                ...(options.sleepLevel && {sleepLevel: options.sleepLevel})
            }
        })
    },
    createSleepLog: async (payload) => {
        console.log("creating sleep log entry", payload)
        const [sleepLog, isCreated] =  await SleepLog.findOrCreate({ payload })
        if (!isCreated) {
            throw new ApiError(
            httpStatus.CONFLICT,
            responseCodes.RECORD_ALREADY_EXISTS.value,
            responseCodes.DATA_PROCESSING_ERROR.value )
        }
        return sleepLog
    },
    getSleepLog: async (id) => {
        console.log("getting single sleep log")
        return SleepLog.findByPk(id)
    },
    updateSleepLog: async (id, payload) => {
        console.log("updating sleep log info")
        return SleepLog.update({ ...payload }, { returning: true, plain: true, where: { id } })
    },
    deleteSleepLog: async (id) => {
        console.log("deleting sleep log")
        return SleepLog.destroy({ where: { id } })
    }
}

module.exports = SleepLogService