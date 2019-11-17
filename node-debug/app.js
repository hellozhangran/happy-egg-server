// node --inspect app.js 以调试模式开启服务
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('hello node debug');
});

app.listen(3000, () => {
    console.log('listen:3000')
});
