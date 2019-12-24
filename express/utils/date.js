function s2 (str) {
    str = String(str);
    str = str.length === 1 ? '0' + str : str;
    return str;
}

function getTodayStr () {
    const date = new Date();
    // 周、月是从0开始，日从1开始
    let month = String(date.getMonth() + 1);
    month = month.length === 1 ? '0' + month : month;
    let dateStr = String(date.getDate());
    dateStr = dateStr.length === 1 ? '0' + dateStr : dateStr;
    return `${date.getFullYear()}${month}${dateStr}`;
}

// 当前的时分秒
function getHMS () {
    const date = new Date();
    return `${s2(date.getHours())}:${s2(date.getMinutes())}:${s2(date.getSeconds())}`;
}

module.exports = {
    getTodayStr,
    getHMS,
};