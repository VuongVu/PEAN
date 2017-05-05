const express = require('express');
const router = express.Router();

const models = require('../models');

// Get all users
router.get('/', (req, res) => {
  models.users.findAll().then((users) => {
    res.json(users);
  });
});

// Generic error handler used by all endpoints.
const handleError = (res, reason, message, code) => {
  console.log('ERROR: ' + reason);
  res.status(code || 500).json({
    error: message
  });
};

module.exports = router;
