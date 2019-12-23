const fs = require('fs');
const path = require('path');
const getTodayStr = require('../express/utils/date').getTodayStr;
let filePath = path.resolve('../', 'crawler.log');
let log = fs.readFileSync(filePath, 'utf8');

// 得到第一行
let first = log.split('\n')[0];
let date = first.split(' ')[0];
let currentDay = getTodayStr();
fs.appendFileSync(filePath, '2019-02-09');
// if (date === currentDay) {
//     // 写入 false
    
// } else {
//     // 写入 true

// }
