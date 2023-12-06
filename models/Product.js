// const products = [];
const path = require('path');
const fs = require('fs');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromTheFile = (cb) => {
    let products = [];

    fs.readFile(p, (error, fileContent) => {
        if (error) {
            cb(products);
        }
        cb(JSON.parse(fileContent));
    });
};
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromTheFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (error) => {
                console.log('error', error);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromTheFile(cb);
    }
};
