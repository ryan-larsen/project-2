const path = require('path')

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated')

module.exports = function (app) {
  app.get('/', function (req, res) {
    // If the user already has an account send them to the login page
    if (req.user) {
      res.redirect('/login')
    }
    res.sendFile(path.join(__dirname, '../public/assets/html/login.html'))
  })

  app.get('/signup', function (req, res) {
    // If the user already has an account send them to the  page
    if (req.user) {
      res.redirect('/sign')
    }
    res.sendFile(path.join(__dirname, '../public/assets/html/signup.html'))
  })
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the login page
  app.get('/vote', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, '../public/assets/html/login.html'))
  })
}