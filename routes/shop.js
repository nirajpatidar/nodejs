const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();

// when ever we use get, post etc method then it automatically exact match
// access from / get
router.get('/', (req, res, next) => {
    console.log('shop js', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    res.render('shop', {
        prods: adminData.products,
        pageTitle: 'Shop',
        path: '/shop',
        hasProduct: adminData.products.length > 0 ? true : false,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;
