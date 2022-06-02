//最长回文字串
//给定一个字符串s，返回s的最长回文字串

//常规解法
function longestPalindrome(s){
    if(s === null || s.length < 2){
        return s;
    }
    //向s字符串中每个字符后面添加#，避免回文字串长度为偶数时不能被找到的情况
    let newS = '';
    for(let i = 0; i < s.length; i++){
        newS += s[i];
        newS += '#';
    }
    // console.log(newS)
    //记录最长回文字串的起始索引sI，结束索引eI和长度length
    let result = [];
    //记录最长回文字串
    let res = '';
    let length = 0;
    //从s的第一个字符开始进行每个尝试，尝试能得到的最长回文字串
    let i = 0;
    while(i < newS.length - 1){
        //i位置左侧、右侧起始字符的索引，左侧、右侧的起始字符，最长回文字串的起始、结束索引
        let lI = i - 1, rI = i + 1, lV = newS[i - 1], rV = newS[i + 1], sI = 0, eI = 0;
        while(lI >= 0 || rI <= newS.length - 1){
            // console.log(lI,rI);
            //如果在i位置处，i左右两侧的字符相同，则继续向左右两侧进行扩展（lI--,rI++）
            //否则，结束扩展，记录此时得到的回文字串
            if(lV === rV){
                lI--;
                rI++;
                lV = newS[lI];
                rV = newS[rI];
            }else{
                break;
            }
        }
        // console.log(lI,rI)
        sI = lI + 1;
        eI = rI - 1;
        if((eI - sI + 1) > length){
            length = (eI - sI) + 1;
            result[0] = sI;
            result[1] = eI;
            result[2] = length;
        }
        // console.log(length);
        i++;
    }
    for(let i = result[0]; i <= result[1]; i++){
        if(newS[i] !== '#')
            res += newS[i];
    }
    if(result[2] !== 1){
        return res;
    }else{
        return newS[0];
    }
    // console.log(result)
}
// console.log(longestPalindrome('"aacabdkacaa"'));
// console.log(longestPalindrome('cbfgedabadeac'))
// // console.log(longestPalindrome('cdceaecfga'))
// // console.log(longestPalindrome('aaabbbbbbbacd'))
// // console.log(longestPalindrome('bb'))
//a c a b d k a c a
//0 1 2 3 4 5 6 7 8
//a b b b b b b b a


//manacher解法
//在常规解法的思路上进行优化
//pArr：i处最长回文字串的半径数组:回文子串长度的一半（向上取整）
//r：之前所有的i处形成的最长回文子串的右边界索引
//c：之前所有的i处形成的最长回文字串的中间位置索引
//max：之前所有的i处形成的最长回文字串的的半径
function longestPalindrome1(s){
    if(s === null || s.length < 2){
        return s;
    }
    let newS = '';
    for(let i = 0; i < s.length; i++){
        newS += s[i];
        newS += '#';
    }
    //记录每个i处的字符所形成的最长回文字串的半径
    let pArr = new Array(newS.length);
    let c = -1, r = -1, max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < newS.length; i++){
        //r > i说明之前所有i处得到的最长回文字串的右边界索引大于i，则此时i处的回文字串半径初始值通过Math.min(pArr[2 * c - i], r - i)确定，否则全部为1（i处的字符本身为初始回文字串）
        pArr[i] = r > i ? Math.min(pArr[2 * c - i], r - i) : 1;
        while (i + pArr[i] < newS.length && i - pArr[i] > -1){
            //从i处往左右扩pArr[i]个单位后进行比较，而不是每次只++
            if(newS[i + pArr[i]] === newS[i - pArr[i]]){
                //相等，则i处得到的回文字串半径++
                pArr[i]++;
            }else{
                break;
            }
        }
        //更新之前所有i处得到的最长回文字串的最右边界和中心位置
        if(i + pArr[i] > r){
            r = i + pArr[i];
            c = i;
        }
        //更新之前所有i处得到的最长回文字串的半径
        max = Math.max(max,pArr[i]);
    }
    //最后得出要返回的最长回文字串
    //最后最长回文字串的半径，中间位置索引
    let finalR = 0, finalI = 0;
    //找pArr中的最大值及其位置
    for(let i = 0; i < pArr.length; i++){
        if(pArr[i] > finalR){
            finalR = pArr[i];
            finalI = i;
        }
    }
    // console.log(finalI,finalR)
    let eI = finalI + finalR - 1, sI = finalI - finalR + 1;
    // console.log(sI,eI)
    let res = '';
    for(let i = sI; i <= eI; i++){
        if(newS[i] !== '#')
            res += newS[i];
    }
    // console.log(res);
    if(finalR !== 1){
        return res;
    }else{
        return newS[0];
    }
}

// console.log(longestPalindrome1('aaabbbbbbbacd'));

//a # b #
//a  #  a  #  c  #  a  #  b  #  d  #  k  #  a  #  c  #  a  #  a  #
//0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20  21

//# 1 # 2 # 2 # 1 #

//在常规解法的思路上进行优化
const longestPalindrome2 = function (s){
    const n = s.length;
    if (n < 2) return s;
    //最长回文字串的起始索引
    let start = 0;
    //最长回文字串的半径
    let maxR = 0;
    let res = '';
    for (let i = 0; i < n; ) {
        //1.最长回文字串长度为奇数和偶数时处理的优化
        //i位置的左右两侧索引（从i位置出发）
        let left = i, right = i;
        //如果当前i位置的字符和i+1位置的字符相等，说明此时得到的回文字串的长度为偶数
        while (s[right] === s[right + 1]) {
            right++;
        }
        //2.i的变化值的优化
        i = right + 1;
        //i位置左右两侧字符是否相同的判断
        while (right < n - 1 && left > 0 && s[right + 1] === s[left - 1]) {
            right++;
            left--;
        }
        //right - left + 1得出此时回文字串的长度
        //maxx之前所有位置得到的最长回文字串的半径
        if (right - left + 1 > maxR) {
            start = left;
            maxR = right - left + 1;
        }
    }
    let end = start + maxR - 1;
    // console.log(start,end,maxR)
    for(let i = start; i <= end; i++){
        res += s[i];
    }
    return res;
}

// console.log(longestPalindrome2('cbfgedabadeac'))