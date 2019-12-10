const express = require('express');
const app = express();
var cluster = require('cluster');
app.use('/api', (req, res, next) => {
    console.log('hello api', cluster.isMaster);
    res.json('hello i am api');
});
app.listen('3000', () => {
    console.log('listen: 3000');
});