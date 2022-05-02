// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const favoriteController = require('../controllers/favoriteController');

router.get('/:id', favoriteController.getFavorites); 
router.post('/', favoriteController.addFavorites); 
router.post('/delete', favoriteController.deleteFavorites); 
router.post('/update', favoriteController.updateFavorites); 


module.exports = router;
