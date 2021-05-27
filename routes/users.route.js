
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', userController.getAll);
router.post('/register', userController.createUser);
router.get('/getUser/:email', userController.getByEmail);

module.exports = router;
