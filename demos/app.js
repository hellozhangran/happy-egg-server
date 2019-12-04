const express = require('express');
const app = express();
app.use('/api', (req, res, next) => {
    res.json('hello i am api');
});
app.listen('3000', () => {
    console.log('listen: 3000');
});