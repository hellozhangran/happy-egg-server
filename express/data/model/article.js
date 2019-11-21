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
ArticleSchema.method({
});

const Article = mongoose.model('article', ArticleSchema);
module.exports = Article;