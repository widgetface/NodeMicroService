const colors = require('colors/safe')
const dotenv = require('dotenv')
const packageJson = require('../package.json')

require('dotenv').config();


function requireFromEnv (key) {
    if (!process.env[key]) {
      // eslint-disable-next-line no-console
      console.error(`${colors.red('[APP ERROR] Missing env variable:')} ${key}`)
  
      return process.exit(1)
    }
  
    return process.env[key]
  }

module.exports = {
    appName: requireFromEnv('APP_NAME'),
    env: requireFromEnv('NODE_ENV'),
    port: parseInt(requireFromEnv('PORT'), 10),
    version: packageJson.version
}