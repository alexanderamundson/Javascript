const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');
const otherLogger = require('./middleware/otherLogger');

const app = express();

//middleware 
app.use(logger);


//send json to browser
app.get('/api/members', (req, res) => res.json(members));




 app.get('/user/:id', otherLogger, (req, res, next) => {
    res.send('User Info');
 });




//set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log*(`Server started on port ${PORT}`));