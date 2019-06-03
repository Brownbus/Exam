const mongoose = require('mongoose');

const User = mongoose.Schema({
  username: { type: String },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  age: { type: String },
});

module.exports = mongoose.model('User', User);