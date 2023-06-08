const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserData');
const UserSchema = require('../validators/userValidatior')
const validator = require('../validator');
// router.get('/', )
// console.log('asas')
router.post('/submit', [validator(UserSchema.post)] , UserController.post);
router.get('/:user_id', UserController.get);
module.exports = router;