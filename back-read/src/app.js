const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');

/* Initializations */
const app =  express();
require('./auth/local_auth.js');

/* Settings */
app.set('port', process.env.PORT || 4000);

/* Middlewares */
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})); /* recibir datos simples */
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'session_secret',
  resave: false,
  saveUninitialized: false,
}));

/* Routes */
app.get('/', (req, res) => res.send('Route Main'))
app.use('/api/users', require('./routes/users.routes.js'));
app.use('/api/requestsUsers', require('./routes/requests.routes.js'));

module.exports = app;
