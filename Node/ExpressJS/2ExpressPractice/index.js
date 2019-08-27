const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');


const app = express();

//middleware 
app.use(logger);


//set a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));
app.use('/api/users', require('./routes/api/users') );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log*(`Server started on port ${PORT}`));