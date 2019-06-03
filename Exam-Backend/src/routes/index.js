const express = require('express');
const router = express.Router();

const {authenticationController} = require('../controllers/authenticationController')
const {checkAuthorization } = require('../middlewares/checkAuthorization')
const {exampleController} = require('../controllers/exampleController')

router.get('/auth', authenticationController)
router.get('/api/:queryParam', checkAuthorization, exampleController)


module.exports = router;
