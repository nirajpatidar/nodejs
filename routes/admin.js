const path = require('path');
const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();
// access from /admin GET
router.get('/add-product', productController.getAddProduct);

// access from /admin POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;
