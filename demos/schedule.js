var schedule = require('node-schedule');
schedule.scheduleJob({hour: null, minute: 0}, function () {
    console.log(111);
});

// schedule.scheduleJob('0 * * * * *', function () {
//     console.log(111);
// });