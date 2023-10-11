const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const rootDir = require('./util/path');

const mainRouter = require('./routes/main');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use(mainRouter);    

app.listen(3000);