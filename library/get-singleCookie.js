module.exports = function getSingleCookie(cookies, value) {
    let arr = cookies.match(new RegExp("(^| )" + value + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
};