var express = require('express');
var path = require('path');
var createError = require('http-errors');

var apiRouter = require('./routes/index');

var app = express();

app.use('/api', apiRouter);
app.use(function(req, res, next) {
    // next(createError(404, 'asdf'));
    res.send('URL Error');
});


app.listen('3000', () => {
    console.log('listen: 3000');
});
module.exports = app;
