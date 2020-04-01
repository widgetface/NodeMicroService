const express = require('express')
const { join } = require('path')

const attachLocals = require('./attach-locals')
const lastResortErrorHandler = require('./last-resort-error-handler')
const primeRequestContext = require('./prime-request-context')

function mountMiddleware(app, env){
    app.use(lastResortErrorHandler)
    app.use(primeRequestContext)
    app.use(attachLocals)

    app.use( 
        express.static(join(_dirname, '..', 'public')),
        {maxAge: 8640000})
}


module.exports = mountMiddleware