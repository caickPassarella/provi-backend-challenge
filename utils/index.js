function getRequestDetails(req) {
    return {
        method: req.method,
        status: req.status,
        headers: req.headers,
        url: req.url,
        body: req.body,
        params: req.params,
        query: req.query
    }
}

module.exports = { getRequestDetails }