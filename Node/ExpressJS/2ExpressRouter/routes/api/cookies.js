const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    console.log('Cookies: ', req.cookies);
    res.cookie('name', 'express').send('cookie set'); //Sets name = express
  });
  
router.get('/clear_express_cookie', function(req, res) {
    res.clearCookie('express');
    res.send('express cookie cleared');
    console.log('Cleared express cookie');
});

module.exports = router;