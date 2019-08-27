const moment = require('moment');

const logger = (req, res, next) => {
    console.log('Request Recieved (from middleware)!!!');
    console.log(`${req.protocol}://${req.get('host')}${
        req.originalUrl 
        }: ${moment().format()}`
        );
    next();
};

module.exports = logger;