const express = require('express');
const router = express.Router();
const articleCtrl = require('../controller/article');


router.get('/', (req, res, next) => {
    res.json(jsond);
});

router.get('/articles', articleCtrl.list);
router.get('/articles/first', articleCtrl.one);
router.get('/articles/')



module.exports = router;