const express = require('express');
const router = express.Router();

const otherLogger = require('../../middleware/otherLogger');

router.get('/:id', otherLogger, (req, res, next) => {
    res.send(`User Info for user with id: ${req.params.id}`);
});

module.exports = router;