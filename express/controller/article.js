const Article = require('../models/article');
function list (req, res, next) {
    // 默认取当天的所有信息
    var today = Date.now()
    Article.list()
    var date = new Date();
    var todayStr = String(date.getFullYear()) + String(date.getMonth()) + String(date.getDate());
    Article.list(todayStr).then(res => {
        console.log(res);
        res.json(res);
    });
}

function create (params) {
    var standardParams = params;
    var date = new Date();
    var todayStr = String(date.getFullYear()) + String(date.getMonth()) + String(date.getDate());
    standardParams.create_date = params.create_date ? params.create_date : todayStr;
    return Article.create({
        ...standardParams
    });
}

module.exports = {
    list,
    create
};