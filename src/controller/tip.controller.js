const httpStatus = require('http-status');
const { TipService } = require('../services');
const catchAsync = require('../common/utils/catchAsync');
const responseCodes = require('../common/utils/responseCodes');

module.exports.getTips = catchAsync(async (req, res) => {
  const tipData = await TipService.listTips(req);
  res.status(httpStatus.OK).send(tipData);
});

module.exports.getTip = catchAsync(async (req, res) => {
  const tipData = await TipService.getTip(req.params.id);
  res.status(httpStatus.FOUND).send(tipData);
});

module.exports.getTipsByQuality = catchAsync(async (req, res) => {
  const tipData = await TipService.getTipsByQuality(req.params);
  res.status(httpStatus.FOUND).send(tipData);
});
