const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middle ware!');
    next(); // Allow to request continue the next middleware in line
})
app.use((req, res, next) => {
    console.log('In the next middle ware!');
    // we send the rsponse here
    res.send('<h1>Hello Welcome to the express js !</h1>');
    // express js middleware executed top to bottom
    // if we not call the next() then next middle ware not executed
    //  default res header type is html
})
app.listen(3000)