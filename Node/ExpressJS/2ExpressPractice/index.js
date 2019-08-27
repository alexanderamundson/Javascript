const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');
const otherLogger = require('./middleware/otherLogger');

const app = express();

//middleware 
app.use(logger);


//send json of members to browser
app.get('/api/members', (req, res) => res.json(members));

//get specific member by id
app.get('/api/members/:id', (req, res) => {
    const exists = members.some(member => member.id === parseInt(req.params.id) );

    if (exists) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id} exists` });
    }
});




 app.get('/user/:id', otherLogger, (req, res, next) => {
    res.send('User Info');
 });




//set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log*(`Server started on port ${PORT}`));