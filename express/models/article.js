const mongoose = require('mongoose');
const ArticleSchema = mongoose.Schema({
    create_date: String,
    from: String,
    title: String,
    hot_level: {type: Number, default: 0},
    favor: {type: Number, default: 0},
    comment: {type: Number, default: 0},
    article: String
});

// 静态方法
ArticleSchema.statics.list = function (date) {
    return this.find({
        'create_date': date
    })
    .exec()
    .then(list => {
        if (list) {
            return list;
        }
        return Promise.reject('error');
    });
}

// 实例方法
ArticleSchema.methods.getM = function () {
    return 'this is getM';
}

// 第三参数指定mongodb中collection的名字，如果不传则默认为变为复数（即articles）
const Article = mongoose.model('Article', ArticleSchema, 'article');
module.exports = Article;