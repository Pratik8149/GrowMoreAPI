
const express = require('express');
const router = express.Router();
const smeinfoController = require('../controllers/smeinfo.controller');

/* GET SMEs information. */
router.get('/:name', smeinfoController.getByName);
module.exports = router;
