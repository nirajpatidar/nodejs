const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
// access from /admin GET
router.get('/add-product', (req, res, next) => {
    // res.send(
    //     '<form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Add</button></form>'
    // );
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});
// access from /admin POST
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
