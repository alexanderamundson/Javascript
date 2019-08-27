const express = require('express');
const router = express.Router();
const members = require('../../Members');

//get all members
router.get('/', (req, res) => res.json(members));

//get specific member by id
router.get('/:id', (req, res) => {
    const exists = members.some(member => member.id === parseInt(req.params.id) );

    if (exists) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id} exists` });
    }
});

module.exports = router;