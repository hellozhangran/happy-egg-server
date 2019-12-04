const Article = require('../models/article');
const getTodayStr = require('../utils/date').getTodayStr;
function list (req, res, next) {
    // 默认取当天的所有信息
    var todayStr = getTodayStr();
    Article.list(todayStr).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        console.log('err: ', err);
    });
}

function create (params) {
    var standardParams = params;
    var todayStr = getTodayStr();
    standardParams.create_date = params.create_date ? params.create_date : todayStr;
    console.log('create: ', params);
    return Article.create({
        ...standardParams
    });
}

module.exports = {
    list,
    create
};
