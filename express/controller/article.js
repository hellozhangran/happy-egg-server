const Article = require('../models/article');
function list (req, res, next) {
    // 默认取当天的所有信息
    var today = Date.now()
    Article.list()
    var date = new Date();
    var todayStr = String(date.getFullYear()) + String(date.getMonth()) + String(date.getDate());
    Article.list(todayStr).then(res => {
        console.log(res);
    });
}

module.exports = {
    list
};