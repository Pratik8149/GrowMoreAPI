
const express = require('express');
const router = express.Router();
const smelistController = require('../controllers/smelist.controller');

/* GET SMEs listing. */
router.get('/', smelistController.getAll);

//router.post('/register', userController.createUser);
//router.get('/getUser/:email', userController.getByEmail);

module.exports = router;
