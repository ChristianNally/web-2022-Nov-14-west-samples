const express = require('express');
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');
const PORT = 8087;
const app = express();

// config
app.set('view engine', 'ejs');

// data
const users = {
  'nally': {password: '$2b$10$aG5goJM7R5hrEP90lIC4u.iEry2je6kORiPApwMVHIzAqmCxyruTG'},
};

// middleware
app.use(express.urlencoded({extended: false}));
app.use(cookieSession({
  name: 'cookiemonster',
  keys: ['hfy843hfhdsakfytdsaghfbad43q46', 'fhdjak4728946fa6df8sdhffa646']
}));

// routes
app.get('/', (req, res) => {
  console.log('users', users);
  res.render('home');
});

// login
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const testUsername = req.body.username;
  const testPassword = req.body.password;

  console.log(`user typed username: ${testUsername} password: ${testPassword}`);
  console.log('users:', users);
  console.log('users[testUsername]', users[testUsername]);
  console.log('testPassword', testPassword);

  // if (testPassword === users[testUsername].password){
  //   res.redirect('/profile');
  // } else {
  //   res.redirect('/login');
  // }

  bcrypt.compare(testPassword, users[testUsername].password)
  .then((result) => {
    console.log('do the passwords match?', result);
    if (result){
      // res.cookie('username', testUsername);
      req.session.username = testUsername;
      res.redirect('/profile');
    } else {
      res.redirect('/login');
    }
  });

});

// registration
app.get('/registration', (req, res) => {
  res.render('registration');
});

app.post('/registration', (req, res) => {
  const newUsername = req.body.username;
  const newPassword = req.body.password;

  console.log(`user typed username: ${newUsername} password: ${newPassword}`);
  console.log('users:', users);
  console.log('users[testUsername]', users[newUsername]);
  console.log('testPassword', newPassword);

  bcrypt.genSalt(10)
  .then((salt) => {
     console.log('salt', salt);
     return bcrypt.hash(newPassword, salt);
   })
   .then((hash) => {
     console.log('hash', hash);
     users[newUsername] = {username: newUsername, password: hash};
     res.redirect('/login');
   });

});

// profile
app.get('/profile', (req, res) => {

  console.log('req.session', req.session);

  const templateVars = {
    username: req.session.username,
    password: users[req.session.username].password
  };

  res.render('profile', templateVars);
});

app.get('/logout', (req, res) => {
  // res.clearCookie('username');
  req.session = null;
  res.redirect('/login');
});

// start the app
app.listen(PORT, () => {
  console.log(`Listening on PORT=${PORT}`);
});