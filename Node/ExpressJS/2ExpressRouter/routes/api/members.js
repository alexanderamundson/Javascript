const express = require('express');
const uuid = require('uuid');
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

// Create new Member
router.post('/', (req, res) => {
    const newMember = {
      id: uuid.v4(),
      name: req.body.name,
      email: req.body.email,
      status: 'active'
    };
  
    if (!newMember.name || !newMember.email) {
      return res.status(400).json({ msg: 'Please include a name and email for a new member' });
    }
    members.push(newMember);
    //res.json(members);
    res.render('index', {
      title: 'Member App',
      members
    });
    
});


// Update Member
router.put('/:id', (req, res) => {
    const exists = members.some(member => member.id === parseInt(req.params.id));
  
    if (exists) {
      const memberUpdates = req.body;
      members.forEach(member => {
        if (member.id === parseInt(req.params.id)) {
          member.name = memberUpdates.name ? memberUpdates.name : member.name;
          member.email = memberUpdates.email ? memberUpdates.email : member.email;
  
          res.json({ msg: 'Member updated', member });
        }
      });
    } else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id} exists` });
    }
  });

  // Delete Member
router.delete('/:id', (req, res) => {
    const exists = members.some(member => member.id === parseInt(req.params.id));
  
    if (exists) {
      res.json({
        msg: 'Member deleted',
        members: members.filter(member => member.id !== parseInt(req.params.id))
      });
    } else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id} exists` });
    }
  });

module.exports = router;