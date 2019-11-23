const express = require('express');
const router = express.Router();
const articleCtrl = require('../controller/article');


router.get('/', (req, res, next) => {
    res.json('hello world');
});

router.get('/articles', articleCtrl.list);


module.exports = router;