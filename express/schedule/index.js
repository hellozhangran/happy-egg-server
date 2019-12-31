var schedule = require('node-schedule');
var limit = require('./limit.js');

// 可以按照cron的格式设置
function runSchedule (cb) {
    // 每小时执行一次 
    schedule.scheduleJob('0 0 * * * *', function () {
        console.log('定时任务执行一次');
        limit(function () {
            cb();
        })
    });
}

module.exports = runSchedule;