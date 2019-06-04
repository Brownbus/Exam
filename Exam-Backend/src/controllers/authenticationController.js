const { authenticationService } = require('../services/authenticationService');
const jwt = require('jsonwebtoken');
const tokenList = {}

const authenticationController = (req, res) => {
  const { username, password } = req.headers;
  authenticationService(username, password)
    .then(user => {
      const { username, firstName, lastName, age } = user[0];
      const authToken = jwt.sign({ password }, process.env.JWT_SECRET, { expiresIn: '1h' });
      const refreshToken = jwt.sign({password}, process.env.REFRESH_SECRET, { expiresIn: '1h'})
      return res.status(200).json({
        username,
        firstName,
        lastName,
        age,
        authToken,
        refreshToken
      });
    })
    .catch(console.log);
};


const refreshController=(req, res)=>{
  const postData = req.body
    if((postData.refreshToken) && (postData.refreshToken in tokenList)) {
        const password = {
            password: postData.password,
        }
        const token = jwt.sign(password, config.secret, { expiresIn: config.tokenLife})
        const response = {
            token,
        }
        tokenList[postData.refreshToken].token = token
        res.status(200).json(response);        
    } else {
        res.status(404).send('Invalid request')
    }
}


module.exports = {
  authenticationController,
  refreshController
};
