function acknowledge (req, res, next) {
    console.log('Request Recieved (from otherLogger.js middleware)!!!');
    next();
}

function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}
  
function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
}


const logStuff = [acknowledge, logOriginalUrl, logMethod];

module.exports = logStuff;
