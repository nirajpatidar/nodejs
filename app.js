const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const errorsController = require('./controllers/errors');

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rootDir = require('./util/path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes)
app.use(shopRouter)
app.use(errorsController.get404)
app.listen(3000)