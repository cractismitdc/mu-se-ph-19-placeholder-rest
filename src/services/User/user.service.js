const httpStatus = require('http-status')
const ApiError = require('../../common/utils/ApiError')
const responseCodes = require('../../common/utils/responseCodes')
const { User } = require('../../models/index')

const UsersServices = {
    // TODO: CRUD Operations for users
    listUsers: async (options) => {
        console.log("getting list of users")
        return await User.findAll()
    },
    createUser: async (payload) => {
        console.log("creating user", payload)
        const [user, isCreated] =  await User.findOrCreate({ 
            where: {
                email: payload.email,
                phone: payload.phone
            },
            defaults: {...payload }
        })
        if (!isCreated) {
            throw new ApiError(
            httpStatus.CONFLICT,
            responseCodes.RECORD_ALREADY_EXISTS.value,
            responseCodes.DATA_PROCESSING_ERROR.value )
        }
        return user
    },
    getUser: async (id) => {
        console.log("getting user info")
        return User.findByPk(id)
    },
    updateUser: async (id, payload) => {
        console.log("updating user info")
        return User.update({ ...payload }, { returning: true, plain: true, where: { id } })
    },
    deleteUser: async (id) => {
        console.log("deleting user")
        return User.destroy({ where: { id } })
    }
}

module.exports = UsersServices