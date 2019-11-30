var express = require('express');
var createError = require('http-errors');
const mongoose = require('mongoose');
var apiRouter = require('./routes/index');
const runSchedule = require('./schedule');
const crawlerCtrl = require('./controller/crawler');

var app = express();

app.use('/api', apiRouter);
app.use(function(req, res, next) {
    // res.status(404);
    // res.send('页面找不到了');
    // return next(createError(404, '页面找不到了'));
    res.json('hello rainbow, server is ok!');
});


function listen () {
    app.listen('3000', () => {
        console.log('listen: 3000');
        // 开启自动脚本
        runSchedule(function() {
            crawlerCtrl.cnblogs();
        })
    });
}

function connect() {
    mongoose.connection
        .on('error', function (err) {
            console.log('connect error: ', err);
        })
        .on('disconnected', connect)
        .once('open', listen);

    return mongoose.connect('mongodb://localhost/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

connect();
