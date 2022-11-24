const express = require('express');
const userRouter = require('./v1/users.route');
const authRouter = require('./v1/auth.route');
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
    path: '/user',
    route: userRouter,
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
