const mongoose = require('mongoose');
// const User = require('./data/model/user');
mongoose.connect('mongodb://localhost/test-ran', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', function (err) {
    console.log('connect error: ', err);
})


const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    sex: Boolean
});

UserSchema.statics.findUserByAge = function (age) {
    // 可是使用.exec的方法，并直接返回，然后就可以用then来拿到结果。findUserByAge(21).then((res) => {})。
    // 也可以在find第二个参数传回调函数
    return this.find({'age': age})
    .exec();
}

UserSchema.methods.createA = function (age) {
    // 可是使用.exec的方法，并直接返回，然后就可以用then来拿到结果。findUserByAge(21).then((res) => {})。
    // 也可以在find第二个参数传回调函数
    // return this.create({'age': age})
    // .exec();
    console.log('this: ', this);
}

UserSchema.methods.findUserByName = function(name) {
    return this.model('user').find({ 'name': name });
};

var User = mongoose.model('user', UserSchema, 'user');


// var yun = new User({name: '赵凤云', age: 27, sex: false});
// yun.save(function (err) {
//     if (err) {
//         console.log('save error');
//     }
//     console.log('success');
// })

db.once('open', function () {
    console.log('open mongodb success!');
    // User.create({name: 'a', age: 27, sale: false}, function(err, info) {
    //     if (err) {
    //         console.log('创建失败');
    //     } else {
    //         console.log('创建成功');
    //     }
    // });
    // User.find({}).then(res => {
    //     console.log('adsfsdaf');
    //     console.log(res);
    // })
    // User.findUserByAge(27).then(res => {
    //     console.log(res);
    // })
    // User.findUserByName('zhangran').then(res => {
    //     console.log(res);
    // })
    // var ran = new User({name: 'zhangsan', age: 27, sex: false});
    // ran.add(function (err, info) {
    //     console.log(info);
    // });
    // ran.save().then(res => {
    //     console.log(res);
    // })
    // ran.remove({name: '赵凤云'}).then(res => {
    //     console.log(res);
    // });
    User.deleteOne({name: 'a'}).then(res => {
        console.log(res);
    });
});