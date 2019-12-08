var schedule = require('node-schedule');
schedule.scheduleJob({hour: 23}, function () {
    console.log(111);
});