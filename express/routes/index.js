const express = require('express');
const router = express.Router();
const articleCtrl = require('../controller/article');
const cCtrl = require('../controller/crawler');
const userModel = require('../models/user');


router.get('/', (req, res, next) => {
    res.json('hello world');
});

router.get('/create', cCtrl);
router.get('/articles', articleCtrl.list);
router.get('/user', function (req, res) {
    userModel.user('age').then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    })
});


module.exports = router;