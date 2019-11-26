const Article = require('../models/article');
function list (req, res, next) {
    // 默认取当天的所有信息
    var date = Date.now()
    var date = new Date();
    var todayStr = String(date.getFullYear()) + String(date.getMonth()) + String(date.getDate());
    Article.list(todayStr).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        console.log('err: ', err);
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