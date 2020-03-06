// Requiring necessary npm packages
const express = require('express')
const session = require('express-session')
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// Requiring passport as we've configured it
const passport = require('./config/passport')

// DB Config
require('./config/db');
const app = express();
const poll = require('./routes/poll');
// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());
app.use('/poll', poll);

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000
const db = require('./models')

// Create express app and configure middleware needed for authentication
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Use sessions to keep track of the users login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

// Requiring routes
require('./routes/html-routes.js')(app)
require('./routes/api-routes.js')(app)

// Syncing database and logging message
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ', PORT)
  })
})