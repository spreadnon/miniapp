//数量格式化
export function formatNum(num) {
    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num;
}

//日期格式化
export function formatTime(timeMills) {
    var date = new Date(timeMills)
    var timeStr = "" //date.getFullYear() + '-'
    if (date.getMonth() < 9) {
        // 月份从0开始的
        timeStr += '0'
    }
    timeStr += date.getMonth() + 1 + '-'
    timeStr += date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        // timeStr += ' '
        // timeStr += date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        // timeStr += ':'
        // timeStr +=
        //     date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        // timeStr += ':'
        // timeStr +=
        //     date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return timeStr
}