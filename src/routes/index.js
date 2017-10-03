const express = require('express')
const router = express.Router()
const home = require('./home')
const signup = require('./signup')
const newuser = require('./newUser')
const validatecharity = require('../models/validateCharity')
const rejectcharity = require('../models/rejectCharity')

/* GET home page. */
router.get('/', home)
router.get('/signup', signup)
router.post('/newuser', newuser)
router.get('/validate/:userinfo', validatecharity)
router.get('/reject/:userinfo', rejectcharity)

// router.post('/verifyuser', verifyuser)
module.exports = router
