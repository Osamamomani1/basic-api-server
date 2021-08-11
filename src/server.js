'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const foodRoutes = require('./routes/food');
// const clothesRoutes = require('./routes/clothes');
app.use(express.json())
app.use(logger);
app.use(foodRoutes);
// app.use(clothesRoutes);

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.get('/', (req, res)=> {
    res.send('Welcome to Home page')
});

app.post('/bad', (req,res)=> {
    let number = 12;
    number.forEach(x=> console.log(x));
    res.send('this Bad Route ');
})



app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}