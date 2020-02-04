const express = require('express');
const cors = require('cors');
const app =  express();

// Settings
app.set('port', process.env.PORT || 4000);
// Middlewares
app.use(cors());
app.use(express.json());
// Routes
app.get('/', (req, res) => res.send('Route Main'))
app.use('/api/users', require('./routes/users.js'));

module.exports = app;
