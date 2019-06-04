const userRepo = require('../repositories/userRepo');

const find = (username) => {return userRepo.find(username)};
const add = (newUser) => {return userRepo.add(newUser)};
const update = (updatedUser) => {return userRepo.update(updatedUser)};
const deleteUser = (username) => {return userRepo.deleteUser(username)};

module.exports = {
  find,
  add,
  update,
  deleteUser
}