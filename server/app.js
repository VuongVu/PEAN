const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// Get our API routes
const users = require('./routes/users');

// Setup express app
const app = express();

// Log request to the console
app.use(logger('dev'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Parser Cookie
app.use(cookieParser('PEAN'));

// Enable CORS
app.use(cors());

// Point static path to dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Set our api routes
app.use('/api/users', users);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found.');
  err.status = 404;
  next(err);
});

// Development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// Production error handler no stack traces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

module.exports = app;
