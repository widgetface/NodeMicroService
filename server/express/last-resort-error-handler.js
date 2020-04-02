function lastResortErrorHandler(err, req, res, next){
    const traceId = req.context ? req.context.traceId : 'none'
    res.status(500).send('error')
}

module.exports = lastResortErrorHandler