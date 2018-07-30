var crypto = require('crypto');//crypto模块的主要功能是加密解密
module.exports = function (pwd) {
    var md5 = crypto.createHash('md5');
    var password = md5.update(pwd).digest('base64');
    return password;
}