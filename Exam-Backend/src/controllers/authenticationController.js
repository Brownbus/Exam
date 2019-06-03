const { authenticationService } = require('../services/authenticationService');
const jwt = require('jsonwebtoken');

const authenticationController = (req, res) => {
  const { username, password } = req.headers;
  authenticationService(username, password)
    .then(user => {
      const { username, firstName, lastName, age } = user[0];
      const authToken = jwt.sign({ password }, process.env.JWT_SECRET);
      return res.status(200).json({
        username,
        firstName,
        lastName,
        age,
        authToken
      });
    })
    .catch(console.log);
};

module.exports = {
  authenticationController
};
