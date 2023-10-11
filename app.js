const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rootDir = require('./util/path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes)
app.use(shopRouter)
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page not found'});
})
app.listen(3000)