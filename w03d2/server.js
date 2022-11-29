//
// INITIAL SETUP
// 
const express = require('express');
const PORT = 8888;
const app = express();
app.set('view engine','ejs');

//
// "DATABASE"
//
const singles = {
  'peter': {name: 'peter', birthday: '1950-01-01', profile: 'Peter"s Profile'},
  'paul': {name: 'paul', birthday: '1950-01-01', profile: 'Paul"s Profile'},
  'mary': {name: 'mary', birthday: '1950-01-01', profile: 'Mary"S Profile'}
};

//
// MIDDLEWARE
//
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.urlencoded({extended: false}));

//
// ROUTES
//

//
// BROWSE
//
app.get('/', (req, res) => {
  console.log('homepage');
  console.log('singles', singles);
  const templateVars = {
    listOfSingles: singles
  };
  res.render('homepage', templateVars);
});

//
// ADD
//
app.get('/singles/new', (req, res) => {
  res.render('new');
});

app.post('/singles/new', (req, res) => {
  console.log('new singles form has been submitted');
  console.log('req.body', req.body);
  const name = req.body.name;
  const birthday = req.body.birthday;
  const profile = req.body.profile;
  singles[name] = {
    name,
    birthday,
    profile
  };
  res.redirect('/');
});

//
// READ
//
app.get('/singles/:name', (req, res) => {
  console.log('single profile detail page');
  console.log('req.params', req.params);
  const name = req.params.name;

  const templateVars = {
    name: name,
    birthday: singles[name].birthday,
    profile: singles[name].profile
  };
  res.render('profile', templateVars);
});

//
// EDIT
//
app.get('/singles/edit/:name', (req, res) => {
  const name = req.params.name;
  const templateVars = {
    name: name,
    birthday: singles[name].birthday,
    profile: singles[name].profile,
  };
  res.render('edit', templateVars);
});

app.post('/singles/edit/:name', (req, res) => {
  console.log('edit singles form has been submitted');
  const indexName = req.params.name;
  console.log('req.body', req.body);
  const name = req.body.name;
  const birthday = req.body.birthday;
  const profile = req.body.profile;
  singles[indexName] = {
    name,
    birthday,
    profile
  };
  res.redirect('/');
});

//
// DELETE
//
app.get('/singles/delete/:name', (req, res) => {
  const name = req.params.name;
  delete singles[name];
  res.redirect('/');
});

// 
// 404
//
app.get('*', (req, res) => {
  res.render('404');
});

//
// START SERVER
//

app.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});
