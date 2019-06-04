const User = require('../models/UserSchema')

const find = (username) => {return User.findOne({username}).exec()}
const add = (newUser) => {return User.create(new User(newUser),{new: true})}
const update = (updatedUser) => {return User.updateOne({username: updatedUser.usernmae}, {...updatedUser}, {new:true, upsert: true}).exec()}
const deleteUser = (username) => {return User.deleteOne({username}).exec('success')}

module.exports = {
  find,
  add,
  update,
  deleteUser
}