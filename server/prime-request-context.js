const uuid = require('uuid/4')

function primeRequestContext(req, res, next){

    req.context = {
        traceId : uuid()
    }

    next()
}

module.exports = primeRequestContext