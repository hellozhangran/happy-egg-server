const mongoose = require('mongoose');
const ArticleSchema = mongoose.Schema({
    create_date: {type: Date, default: Date.now},
    from: String,
    title: String,
    article: String,
    hot_level: {type: Number, default: 0},
    favor: {type: Number, default: 0},
    comment: {type: Number, default: 0},
});

// 方法
ArticleSchema.methods = {
    list (date) {
        this.find({
            'create_date': new RegExp(date, i)
        })
        .exec()
        .then(list => {
            if (list) {
                return list;
            }
            return Promise.reject('error');
        });
    }
};

const Article = mongoose.model('article', ArticleSchema);
module.exports = Article;