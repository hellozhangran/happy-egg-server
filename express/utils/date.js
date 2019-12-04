function getTodayStr () {
    const date = new Date();
    // 周、月是从0开始，日从1开始
    let month = String(date.getMonth() + 1);
    month = month.length === 1 ? '0' + month : month;
    let dateStr = String(date.getDate());
    dateStr = dateStr.length === 1 ? '0' + dateStr : dateStr;
    return `${date.getFullYear()}${month}${dateStr}`;
}

module.exports = {
    getTodayStr
};