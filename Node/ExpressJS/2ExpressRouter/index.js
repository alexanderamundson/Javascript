const express = require('express');
const path = require('path');
const members = require('./Members');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const cookieParser = require('cookie-parser');


const app = express();

/* middleware  */
app.use(logger);
app.use(cookieParser());

//middleware body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


/* Routes */
//Homepage route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);


//set a static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/cookies', require('./routes/api/cookies') );
app.use('/api/members', require('./routes/api/members') );
app.use('/api/users', require('./routes/api/users') );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log*(`Server started on port ${PORT}`));