//取模运算：每次得到该数的最后一个数字
//除十运算：每次抛去该数的最后一个数字

//1.数字反转(https://leetcode.cn/problems/reverse-integer/)
//取模运算解法
function reverse2(x){
    if(x === 0){
        return 0;
    }
    let res = 0;
    let newX = x > 0 ? x : -x;
    while(newX !== 0){
        //    通过取模得到每次末尾的数字，例如134250，每次依次得到0 5 2 4 3 1
        let temp = newX % 10;
        //得到0，res = 0 * 10 + 0 = 0
        //得到5，res = 0 * 10 + 5 = 5
        //得到2，res = 5 * 10 + 2 = 52
        //得到4，res = 52 * 10 + 4 = 524
        //得到3，res = 524 * 10 + 3 = 5243
        //得到1，res = 5243 * 10 + 1 = 52431
        res = res * 10 + temp;
        //每次x变成13425,1342,134,13,1,0，以便于取模得到每次末尾的数字
        newX = Math.floor(newX / 10);
    }
    if(x < 0 && res <= (Math.pow(2,31) - 1) && res >= -(Math.pow(2,31) - 1)){
        return -res;
    }
    if(res <= (Math.pow(2,31) - 1) && res >= -(Math.pow(2,31) - 1)){
        return res;
    }else{
        return 0;
    }
}

//2.判断回文整数(https://leetcode.cn/problems/palindrome-number/)
function isPalindrome(x){
    if(x === 0){
        return true;
    }
    //负数或者最后一个数字为0的数一定不是回文数
    if(x < 0 || x % 10 === 0){
        return false;
    }
    //个位数一定是回文数
    if(Math.floor(x / 10) === 0){
        return true;
    }
    //记录反转之后的整数
    //如果x是回文整数且长度为偶数，例如2442，则反转一半之后的整数（24）会和x一半除10之后的整数（24）相等
    //如果x是回文整数且长度为奇数，例如13031，则反转一半之后的整数（130）除10之后（13）会和x一半除10之后的整数（13）相等
    let rN = 0;
    //x在不断减少（除10），rN在不断增加
    //x > rN控制反转x一半的整数，控制x一半除10
    //以下两个过程只进行至x长度的一半
    while(x > rN){
        rN = rN * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    console.log(x,rN)
    return x === rN || x === Math.floor(rN / 10);
}

// console.log(isPalindrome(24142))

//字符串转整数(https://leetcode.cn/problems/string-to-integer-atoi/)
//要保证以数字开头的数字才是有效数字
function myAtoi(s) {
    let length = s.length;
    let sArr = new Array(s.length);
    for(let i = 0; i < s.length; i++){
        sArr[i] = s[i];
    }
    // console.log(sArr);
//    去除最前面的空格
    let index = 0;
    while(index < length && sArr[index] === ' '){
        index++;
    }
    //最后遍历完成整个字符串但返回0的情况
    if(index === length){
        return 0;
    }
//    正负号的确定
    let sign = 1;//正号
    let firstChar = sArr[index];
    if(firstChar === '+'){
        index++;
    }else if(firstChar === '-'){
        index++;
        sign = -1;//负号
    }
//    将数字字符转换成整数
    let res = 0;
    while(index < length){
        let curChar = sArr[index];
    //    遇到非数字字符时
        if(curChar.charCodeAt(0) < 48 || curChar.charCodeAt(0) > 57){
            break;
        }
        //得到整数
        res = res * 10 + sign * (curChar - 0);
        index++;
    }
    //小于-2^31和大于(2^31 - 1)时的处理
    if(res <= (Math.pow(2,31) - 1) && res >= -Math.pow(2,31))
        return res;
    else if(res > (Math.pow(2,31) - 1))
        return Math.pow(2,31) - 1;
    else if(res < -Math.pow(2,31))
        return -Math.pow(2,31)
}
console.log(myAtoi('  -2147483646'));