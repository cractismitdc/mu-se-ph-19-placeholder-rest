const httpStatus = require('http-status')
const ApiError = require('../../common/utils/ApiError')
const responseCodes = require('../../common/utils/responseCodes')
const { BodyState } = require('../../models/index')
const { Op } = require("sequelize")

const BodyStateServices = {
    // TODO: CRUD Operations for Body State
    getAllBodyState: async (options) => {
        console.log("getting list of body state")
        return await BodyState.findAll({
            where: {
                userId: options.userId,
                ...(options.intensity && {intensity: {
                    [Op.in]: [options.intensity]
                }})
            }
        })
    },
    createBodyState: async (payload) => {
        console.log("creating body state entry", payload)
        const [bodyState, isCreated] =  await BodyState.findOrCreate({ payload })
        if (!isCreated) {
            throw new ApiError(
            httpStatus.CONFLICT,
            responseCodes.RECORD_ALREADY_EXISTS.value,
            responseCodes.DATA_PROCESSING_ERROR.value )
        }
        return bodyState
    },
    getBodyState: async (id) => {
        console.log("getting single sleep log")
        return BodyState.findByPk(id)
    },
    updateBodyState: async (id, payload) => {
        console.log("updating body state info")
        return BodyState.update({ ...payload }, { returning: true, plain: true, where: { id } })
    },
    deleteBodyState: async (id) => {
        console.log("deleting body state")
        return BodyState.destroy({ where: { id } })
    }
}

module.exports = BodyStateServices