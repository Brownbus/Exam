const User = require('../models/UserSchema');

const authenticationRepository = (username, password) => {
  return User.find({username, password}).exec();
};
module.exports = {
  authenticationRepository
};
