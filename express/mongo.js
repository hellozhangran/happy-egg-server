const mongoose = require('mongoose');
const User = require('./data/model/user');
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', function (err) {
    console.log('connect error: ', err);
})

db.once('open', function () {
    console.log('open mongodb success!');
    // User.create({name: '赵凤云', age: 27, sale: false}, function(err, info) {
    //     if (err) {
    //         console.log('创建失败');
    //     } else {
    //         console.log('创建成功');
    //     }
    // });
    // User.find(function(err, info) {
    //     if (err) {
    //         console.log('find err');
    //         return;
    //     }
    //     console.log(info);
    // })
    User.find({}).then(res => {
        console.log('adsfsdaf');
        console.log(res);
    })
});

// var User = mongoose.model('user', {
//     name: String,
//     age: Number,
//     sale: Boolean
// });

// var yun = new User({name: '赵凤云', age: 27, sale: false});
// yun.save(function (err) {
//     if (err) {
//         console.log('save error');
//     }
//     console.log('success');
// })