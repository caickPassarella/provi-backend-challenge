const { getRequestDetails } = require('../utils');

const handleError = (err, req, res, next) => {
  const { args, name, status, message, stack } = err;
  console.error({
    request: getRequestDetails(req),
    error: {
      name,
      message,
      args,
      stack
    }
  }, `Failed to process the request to ${req.method} ${req.url}`);
  res.status(err.status || 500).json({message});
};

module.exports = { handleError };