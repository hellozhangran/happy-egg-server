var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('hello api');
});

router.get('/list', (req, res, next) => {
    res.send('api: list');
})

module.exports = router;
