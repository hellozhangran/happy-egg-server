const fs = require('fs');
const path = require('path');
const getTodayStr = require('../express/utils/date').getTodayStr;
const getHMS = require('../express/utils/date').getHMS;
let filePath = path.resolve('../', 'crawler.log');
let log = fs.readFileSync(filePath, 'utf8');

// 得到第一行
let list = log.split('\n');
let date = list[0].split(' ')[0];
let currentDay = getTodayStr();
console.log(list);
if (date === currentDay) {
    list.unshift(currentDay + ' ' + getHMS() + ' ' + 'false');
} else {
    list.unshift(currentDay + ' ' + getHMS() + ' ' + 'true');
}
fs.writeFileSync(filePath, list.join('\n'), 'utf8');
