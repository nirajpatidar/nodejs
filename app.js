const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('This is first middle ware');
//     next(); // Allow to request continue the next middleware in line
// })
// app.use((req, res, next) => {
//     console.log('This is second middleware');
//     // we send the response here
//     res.send('<h1>Hello Welcome to the express js !</h1>');
// })

app.use('/users', (req, res, next) => {
    res.send('<h1>It handle the /users route</h1>')
})
app.use('/', (req, res, next) => {
    res.send('<h1>It handle the / request</h1>')
})
app.listen(3000)