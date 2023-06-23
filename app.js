const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure express-session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  (username, password, done) => {
    // Replace this with your actual authentication logic
    if (username === 'admin' && password === 'admin') {
      return done(null, { id: 1, username: 'admin' });
    } else {
      return done(null, false);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Replace this with your actual user retrieval logic
  const user = { id: 1, username: 'admin' };
  done(null, user);
});


// Add routes and other middleware here
// Login route
app.post('/login',
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' })
);

// Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// Protected route
app.get('/protected', isAuthenticated, (req, res) => {
  res.send('This is a protected route');
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
