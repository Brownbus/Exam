const { authenticationRepository } = require('../repositories/authenticationRepo');

const authenticationService = (username, password) => {
  return authenticationRepository(username, password)
}

module.exports = {
  authenticationService,
}