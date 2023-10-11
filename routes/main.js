const express = require('express');
const path = require('path');

const router = express.Router();
const usersList = [];

router.get('/', (req, res, next) => {
    res.status(200).render('main', { pageTitle: 'Add user', path: '/' });
});

router.post('/add-user', (req, res, next) => {
    const users = req.body;
    usersList.push({username: users.username})
    res.status(200).redirect('/users');
});

router.get('/users', (req, res, next) => {
    res.status(200).render('users', { pageTitle: 'Users list', path: '/users', usersList: usersList });
});

module.exports = router;
