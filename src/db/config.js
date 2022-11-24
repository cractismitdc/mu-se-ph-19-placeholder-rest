require('dotenv').config()
const envVars = process.env
module.exports = {
    development: {
      username: envVars.DB_USER,
      password: envVars.DB_PASS,
      database: envVars.DB_NAME,
      host: envVars.DB_HOST,
      dialect: envVars.DB_DIALECT,
      pool: { 
        min: parseInt(envVars.DB_POOL_MIN), 
        max: parseInt(envVars.DB_POOL_MAX),
        idle: parseInt(envVars.DB_POOL_IDLE),
        acquire: parseInt(envVars.DB_POOL_ACQ), 
      },
    },
    production: {
      username: envVars.DB_USER,
      password: envVars.DB_PASS,
      database: envVars.DB_NAME,
      host: envVars.DB_PORT,
      dialect: envVars.DB_DIALECT,
      pool: { 
        min: parseInt(envVars.DB_POOL_MIN), 
        max: parseInt(envVars.DB_POOL_MAX),
        idle: parseInt(envVars.DB_POOL_IDLE),
        acquire: parseInt(envVars.DB_POOL_ACQ), 
      },
    },
  }