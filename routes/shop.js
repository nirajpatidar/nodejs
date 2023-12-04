
const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');

// when ever we use get, post etc method then it automatically exact match
// access from / get
router.get('/', productController.getProduct);

module.exports = router;
