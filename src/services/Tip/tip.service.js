const httpStatus = require('http-status');
const ApiError = require('../../common/utils/ApiError');
const responseCodes = require('../../common/utils/responseCodes');
const { Tip } = require('../../models/index');

const TipServices = {
  // TODO: CRUD Operations for users
  listTips: async (options) => {
    console.log('Controller');
    console.log('getting list of tips');
    return await Tip.findAll();
  },
  getTip: async (id) => {
    console.log('getting tip info');
    return Tip.findByPk(id);
  },
  getTipsByQuality: async (options) => {
    console.log('getting list of tips');
    console.log(options);
    return await Tip.findAll({
      where: {
        sleepCode: options.sleepcode
      }
    });
  }
};

module.exports = TipServices;
