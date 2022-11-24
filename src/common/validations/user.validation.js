const Joi = require('joi')

const createUser = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        address: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
    })
}

const getUser = {
    params: Joi.object().keys({
        id: Joi.number().integer(),
    })
}

const updateUser = {
    params: Joi.object().keys({
        id: Joi.number().integer(),
    }),
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        address: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
    })
}

module.exports = {
    createUser,
    getUser,
    updateUser
}