/**
 * 通过一个日志文件来控制定时任务
 */
const fs = require('fs');
const path = require('path');
const getTodayStr = require('../utils/date').getTodayStr;
const getHMS = require('../utils/date').getHMS;
let filePath = path.join(__dirname, '../../logs/crawler.log');
function limit(cb) {
    let log = fs.readFileSync(filePath, 'utf8');
    // 得到第一行
    let list = log.split('\n');
    let date = list[0].split(' ')[0];
    let currentDay = getTodayStr(); // 20100101
    let hms = getHMS(); // 12:23:01
    if (date === currentDay) {
        list.unshift(currentDay + ' ' + hms + ' ' + 'false');
        fs.writeFileSync(filePath, list.join('\n'), 'utf8');
    } else {
        list.unshift(currentDay + ' ' + hms + ' ' + 'true');
        fs.writeFileSync(filePath, list.join('\n'), 'utf8');
        cb && cb();
    }
}
module.exports = limit;