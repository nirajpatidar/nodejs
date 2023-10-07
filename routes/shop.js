const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// when ever we use get, post etc method then it automatically exact match
// access from / get
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'main.html'))
})
router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'user.html'))
})

module.exports = router;