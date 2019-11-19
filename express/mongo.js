const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var User = mongoose.model('user', {
    name: String,
    age: Number,
    sale: Boolean
});

var yun = new User({name: '赵凤云', age: 27, sale: false});
yun.save(function (err) {
    if (err) {
        console.log('save error');
    }
    console.log('success');
})