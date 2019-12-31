function limit (cb) {
    if (process.env.NODE_APP_INSTANCE === '0') {
        console.log('命中：', process.env.NODE_APP_INSTANCE);
        cb && cb();
    }
}
module.exports = limit;