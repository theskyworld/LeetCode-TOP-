//Pow(x, n)(https://leetcode.cn/problems/powx-n/)


//二分处理n
function myPow(x,n){
    if(n === 0){
        return 1;
    }
    if(n < 0){
        return 1 / myPow(x,-n);
    }
    if(n % 2){
        return x * myPow(x, n - 1);
    }
    return myPow(x * x, n / 2);
}

//位运算处理n
function myPow1(x,n){
    if(n < 0){
        x = 1 / x;
        n = -n;
    }
    let result = 1;
    while(n){
        //判断n的二进制最后一位是否是1， 如果是1则将结果乘以x
        if(n & 1) {
            result *= x;
        }
        x *= x;
        n >>>= 1;
        //进行无符号右移1位，此处不能使用符号右移（>>）
        //当n为-2^31转换成正数时的二进制位“10000000000000000000000000000000” , 如果采用有符号右移时会取最左侧的数当符号即（1），所以返回的结果是 -1073741824
    }
    return result;
}