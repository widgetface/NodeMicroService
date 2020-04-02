const createExpressApp = require('./express')
const createConfig = require('./server-config')
const env = require('./server-env')

const config = createConfig({env})
const app = createExpressApp({config, env})

function signalAppStart(){
    console.log(`${env.appName} started`)
    console.log(`Port ${env.port}`)
}
function start(){
    app.listen(env.port, signalAppStart)
}

module.exports = {
    app,
    config,
    start
}