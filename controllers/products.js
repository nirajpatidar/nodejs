// const products = [];
const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        activeAddProduct: true,
        formsCSS: true,
        productCSS: true
    });
}

exports.postAddProduct = (req, res, next) => {
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title);
    product.save()
    res.redirect('/');
}

exports.getProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/shop',
            hasProduct: products.length > 0 ? true : false,
            activeShop: true,
            productCSS: true
        });
    })
}