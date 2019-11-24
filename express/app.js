var express = require('express');
var createError = require('http-errors');
const mongoose = require('mongoose');
var apiRouter = require('./routes/index');

var app = express();

app.use('/api', apiRouter);
app.use(function(req, res, next) {
    // res.status(404);
    // res.send('页面找不到了');
    return next(createError(404, '页面找不到了'));
});


function listen () {
    app.listen('3000', () => {
        console.log('listen: 3000');
    });
}

function connect() {
    mongoose.connection
        .on('error', function (err) {
            console.log('connect error: ', err);
        })
        .on('disconnected', run)
        .once('open', listen);

    return mongoose.connect('mongodb://localhost/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}


connect();
