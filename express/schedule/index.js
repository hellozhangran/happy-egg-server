var schedule = require('node-schedule');

// 可以按照cron的格式设置
// var j = schedule.scheduleJob('* * * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
// });

// 也可以通过属性设置，更简单易用，如果想设置每秒执行一次，就是second:null，其他可设计属性：
/**
 *  second (0-59)
 *  minute (0-59)
 *  hour (0-23)
 *  date (1-31)
 *  month (0-11)
 *  year
 *  dayOfWeek (0-6) Starting with Sunday
 */
// var j = schedule.scheduleJob({second: null}, function(){
//     console.log('Time for tea!');
// });

function runSchedule (cb) {
    schedule.scheduleJob({hour: 10, minute: 24}, cb);
}

module.exports = runSchedule;