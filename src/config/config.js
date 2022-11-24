require('dotenv').config()
const envVars = process.env
module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwtc: {
    secret: envVars.JWT_TOKEN_SECRET,
    refreshToken: envVars.JWT_REFRESH_TOKEN,
    tokenExpiration: envVars.JWT_TOKEN_EXPIRATION
  },
};
