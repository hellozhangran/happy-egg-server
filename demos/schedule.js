var schedule = require('node-schedule');
schedule.scheduleJob({hour: 23, minute: 0}, function () {
    console.log(111);
});