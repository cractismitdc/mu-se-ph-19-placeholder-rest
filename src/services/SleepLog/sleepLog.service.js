const httpStatus = require('http-status')
const ApiError = require('../../common/utils/ApiError')
const responseCodes = require('../../common/utils/responseCodes')
const { SleepLog } = require('../../models/index')
const sleepCodes = require('../../common/utils/sleep')

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
        // console.log("creating sleep log entry", payload)
        const sleepDuration = payload.sleepEnd - payload.sleepStart
        let x = Math.round(payload.remSleepDuration / sleepDuration * 100)
        let y = Math.round(sleepDuration / payload.remSleepDuration * 100)
        const exhausted = 0
        const tired = 1
        const wellRested = 2
        // const exhausted = [1,2,3,4,5]
        const remOverSDuration = sleepCodes.remOverSDuration.value
        const sDurationOverRem = sleepCodes.sDurationOverRem.value

        for (const key in remOverSDuration) {
            x = x < remOverSDuration[key] && key
            return x
        }
        console.log(x, y)
       /*  x = x < 10 
            ? exhausted 
            : x < 17 ? tired : wellRested
        y = y >= 85 
            ? wellRested 
            : y >= 70 ? tired : exhausted  */
            
        const sleepLevel = Math.round(x + y / 2)
        console.log(sleepLevel)

        //REM Sleep / (sleepEnd - sleepStart) = 
        //  0: <10%
        //  1: <17%
        //  2: >=18%

        //(sleepEnd - sleepStart) / timeInBed =
        //  0: 85%
        //  1: 70%
        //  2: 50%


        /* const [sleepLog, isCreated] =  await SleepLog.findOrCreate({ payload })
        if (!isCreated) {
            throw new ApiError(
            httpStatus.CONFLICT,
            responseCodes.RECORD_ALREADY_EXISTS.value,
            responseCodes.DATA_PROCESSING_ERROR.value )
        }
        return sleepLog */

        return sleepLevel;
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
    },
    sleepLeaderboard: async () => {
        return SleepLog.findAll({
            attributes:[
                [sequelize.fn('COUNT', sequelize.col('sleepLevel')), 'sleepLevel']
            ],
            where: {
                sleepLevel: {
                  [Op.eq]: "Well-Rested"
                }
            },
            group: "userId" 
        })
    },
    sleepStreak: async (id) => {
        return SleepLog.findAll({
            attributes:[
                [sequelize.fn('COUNT', sequelize.col('sleepLevel')), 'sleepStreak']
            ],
            where: {
                userId: id,
                sleepLevel: {
                  [Op.eq]: "Well-Rested"
                }
            },
        })
    }
}

module.exports = SleepLogService