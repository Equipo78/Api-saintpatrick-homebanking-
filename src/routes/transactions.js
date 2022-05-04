const express = require('express');
const router = express.Router();

const controller = require('../controllers/transactionsController');


router.post('/', controller.transaction); 
router.get('/existTransaction', controller.existNro); 



module.exports = router;