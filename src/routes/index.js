const express = require('express');
const userRouter = require('./v1/users.route');
const authRouter = require('./v1/auth.route');
const sleepLogRouter = require('./v1/sleepLog.route');
const bodyStateRouter = require('./v1/bodyState.route');
const config = require('../config/config');
const authHandler = require('../middlewares/auth')

const router = express.Router();

/* const testRoutes = [
  {
    path: '/test',
    route: test,
  },
]; */

const devRoutes = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/sleepLogs',
    route: sleepLogRouter,
  },
  {
    path: '/bodyStates',
    route: bodyStateRouter,
  },
];

/* testRoutes.forEach((route) => {
  router.use(route.path, route.route);
}); */

// auth route
router.use('/auth', authRouter)

if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, authHandler, route.route);
  });
}

module.exports = router;
