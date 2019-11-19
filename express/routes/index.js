var express = require('express');
var router = express.Router();
const jsond = {
    name: 'zhangran',
    age: 21
}

router.get('/', (req, res, next) => {
    res.json(jsond);
});

router.get('/list', (req, res, next) => {

    res.send('api: list');

})


module.exports = router;