/*************  
 * 随机字符串的生成
 * 
 * Math对象中的Math.random等方法的使用
 * 
 * input:  所需随机字符串的长度
 * output: 产生的定长随机字符串
 */


const random_str = (length) => {
    var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
    ALPHABET += '0123456789-_';
    var str = '';
    for (var i = 0; i < length; ++i) {
        var rand = Math.floor(Math.random() * ALPHABET.length);
        str += ALPHABET.substring(rand, rand + 1);
    }
    return str;
}

random_str(6) // "NdQKOr"