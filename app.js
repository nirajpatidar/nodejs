const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This middleware always runs')
    next();
 })
app.use('/add-product', (req, res, next) => {
   res.send('<h1>this is Add product page!</h1>')
})
app.use('/', (req, res, next) => {
    res.send('<h1>Welcome on root page</h1>')
})
app.listen(3000)