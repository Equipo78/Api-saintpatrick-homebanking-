const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');
const findCbu = require('../middlewares/findCbu');

router.get('/', accountController.account)
router.get('/transaction', accountController.transaction)
router.get('/find-account',findCbu, accountController.findCBU)


module.exports = router;