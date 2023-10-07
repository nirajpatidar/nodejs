const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
const shopRouter = require('./routes/shop');
app.use(shopRouter);
app.listen(3000);

