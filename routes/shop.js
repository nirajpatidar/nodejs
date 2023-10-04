const express = require('express');
const router = express.Router();

// when ever we use get, post etc method then it automatically exact match
// access from / get
router.get('/', (req, res, next) => {
    res.send('<h1>Welcome on root page</h1>')
})

module.exports = router;