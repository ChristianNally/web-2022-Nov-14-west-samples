const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8082;
app.set("view engine","ejs");

//
// Users Data
//
const users = {
  'nally': {name: 'nally', password: 'qwerty'},
  'monkey': {name: 'monkey', password: 'fuzz'},
};

//
// Middleware
//
// puts form data into req.body
app.use(express.urlencoded({ extended: false})); // 
app.use(cookieParser());

//
// Routes
//
app.get('/', (req, res) => {
  res.render('homepage');
});

// Login Routes
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  console.log('POST /login');
  console.log('req.body', req.body);

  const testUsername = req.body.username;
  const testPassword = req.body.password;

  if (testPassword === users[testUsername].password ) {
    // set a cookie
    res.cookie('user', testUsername);
    // redirect to the homepage
    res.redirect('/');
  } else {
    // redirect back to the login form
    res.redirect('/login');
  }
});

// Registration Routes
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  console.log('req.body', req.body);
  // req.body [Object: null prototype] {
  //   username: 'sandra',
  //   password1: 'dBe@rj7S9z5RK',
  //   password2: 'dBe@rj7S9z5RK'
  // }

  const username = req.body.username;
  const password1 = req.body.password1;
  const password2 = req.body.password2;

  if (password1 === password2) {
    users[username] = {name: username, password: password1}; // add user
    res.cookie('user', username);
    res.redirect('/');
  } else {
    res.redirect('/register');
  }


});

// Profile Page
app.get('/profile', (req, res) => {
  console.log('req.cookies', req.cookies);
  if (req.cookies['user']){
    const templateVars = {
      username: req.cookies['user'],
      password: users[req.cookies['user']].password
    };
    res.render('profile', templateVars);
  } else {
    res.redirect('/login');
  }

});

// Logout Route
app.get('/logout', (req, res) => {
  res.clearCookie("user");
  res.redirect('/');
});

// start the app
app.listen(PORT,"localhost", ()=>{
  console.log(`Server is listening on port ${PORT}`);
});
