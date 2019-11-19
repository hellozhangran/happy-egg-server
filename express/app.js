var express = require('express');
var path = require('path');
var createError = require('http-errors');

var apiRouter = require('./routes/index');

var app = express();

app.use('/api', apiRouter);
app.use(function(req, res, next) {
    // res.status(404);
    // res.send('页面找不到了');
    return next(createError(404, '页面找不到了'));
});


app.listen('3000', () => {
    console.log('listen: 3000');
});
module.exports = app;
