// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const favoriteController = require('../controllers/favoriteController');

router.get('/', mainController.users); 
// router.get('/favorite', favoriteController.users); 
// router.get('/account', mainController.account); 
// router.get('/bank', mainController.bank); 
// router.get('/card', mainController.card); 
// router.get('/movement', mainController.movement); 
// router.get('/transaction', mainController.transaction); 
// router.get('/type', mainController.type); 


module.exports = router;
