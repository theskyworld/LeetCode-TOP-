//整数反转
//给定一个32位的有符号整数x，返回将x中的数字部分反转后的结果
//如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0

//常规解法
//将数字转换成字符串
//然后准备指针从后到前逆序拼接
function reverse(x){
    x = x + '';
    if(x.length === 1){
        return x;
    }
    let res = new Array(x.length);
    if(x[0] === '-')
        res[0] = '-';
    if(x[x.length - 1] === '0')
        res[res.length - 1] = '';
    let startI = x[x.length - 1] === '0' ? x.length - 2 : x.length - 1;
    let endI = x[0] === '-' ? 1 : 0;
    for(let i = startI; i >= endI; i--){
        res.push(x[i]);
    }
    let s = '';
    res.forEach(i=>{return s += i});
    s = Number.parseFloat(s);
    if(s <= (Math.pow(2,31) - 1) && s >= -(Math.pow(2,31) - 1))
        return s;
    else
        return 0;
}
// console.log(reverse(-1118));
const reverse1 = function(x) {
    if (x === 0) return 0
    //将x数字转换成字符串后进行反转
    const XArr = String(Math.abs(x)).split('').reverse()
    let ans = 0
    if (x > 0) {
        ans += Number(XArr.join(''))
    } else {
        ans -= Number(XArr.join(''))
    }
    if (ans < Math.pow(-2, 31) || ans > Math.pow(2, 31) - 1) {
        ans = 0
    }
    return ans
};

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

// console.log(reverse2(-134250))

