const express = require('express');

//import controller
const sleepLogController = require('../../controller/sleepLog.controller');

// user router
const router = express.Router();
router
  .get('/', sleepLogController.getAllSleepLog)
  .post('/', sleepLogController.createSleepLog)
  .get('/leaderboard', sleepLogController.getSleepLeaderboard)
  .get('/:id', sleepLogController.getSleepLog)
  .get('/:id/streak', sleepLogController.getSleepStreak)
  .put('/:id', sleepLogController.updateSleepLog)
  .delete('/:id', sleepLogController.deleteUser);

module.exports = router;
