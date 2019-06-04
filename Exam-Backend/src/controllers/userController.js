const userService = require('../services/userService');

const findUserController = (req, res) => {
  const username = req.params.username;
  if (username.length) {
    return userService.find(username).then(user => {
      if (user) {
        return res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'no user found' });
      }
    });
  } else {
    return res.status(400).json({ error: 'no username provided' });
  }
};
const deleteUserController = (req, res) => {
  const username = req.params.username;
  if (!username) {
    return res.status(400).json({ error: 'no usernmae provided' });
  }
  userService
    .deleteUser(username)
    .then(res.status(204).send())
    .catch(e => res.status(500).json({ error: e.message }));
};
const addUserController = (req, res) => {
  userService.add(req.body).then(user => {res.status(200).json(user)}).catch(e => res.status(500).json({error : e.message}))
};
const updateUserController = (req, res) => {
  userService.update(req.body).then(user => res.status(200).json(user)).catch(e => res.status(500).json({error : e.message}))
};

module.exports = {
  addUserController,
  findUserController,
  deleteUserController,
  updateUserController
};
