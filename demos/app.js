const express = require('express');
const cluster = require('cluster');
const app = express();
app.use(function (req, res, next) {
    // let is = cluster.isMaster;
    let works = cluster.workers
    // res.send(111);
    // console.log(works.toString());
    console.log(works);
    res.json(JSON.stringify(works));
})
app.listen(3000);