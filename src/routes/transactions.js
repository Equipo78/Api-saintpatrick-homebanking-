const express = require('express');
const router = express.Router();

const controller = require('../controllers/transactionsController');


router.post('/', controller.transaction); 



module.exports = router;