const express = require('express');
const router = express.Router();

const {authenticationController, refreshController} = require('../controllers/authenticationController')
const {checkAuthorization } = require('../middlewares/checkAuthorization')
const {exampleController} = require('../controllers/exampleController')
const {findUserController, deleteUserController, addUserController, updateUserController} = require('../controllers/userController')


router.get('/auth', authenticationController)
router.get('/api/:queryParam', checkAuthorization, exampleController)
router.get('/user/:username', findUserController)
router.delete('/user/:username', deleteUserController)
router.post('/user', addUserController)
router.put('/user', updateUserController);
router.get('/token', refreshController);


module.exports = router;
