//两数相除（https://leetcode.cn/problems/divide-two-integers/）

//https://leetcode.cn/problems/divide-two-integers/solution/po-su-de-xiang-fa-mei-you-wei-yun-suan-mei-you-yi-/
function divide3(dividend,divisor){
    let d1 = dividend, d2 = divisor;
    if(d1 === 0){
        return 0;
    }
    if(d2 === 1){
        return d1;
    }
    if(d2 === -1){
        if(d1 > -Math.pow(2,31)){
            return -d1;
        }else{
            return Math.pow(2,31) - 1;
        }
    }
    if(d1 === d2){
        return 1;
    }
    //确定最后结果的正负号
    let symbol = 1;
    if((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)){
        symbol = -1;
    }
    //取d1和d2的绝对值来参与计算
    d1 = d1 < 0 ? -d1 : d1;
    d2 = d2 < 0 ? -d2 : d2;
    let res = div(d1, d2);
    res = symbol < 0 ? -res : res;
    if(res >= -Math.pow(2,31) && res <= (Math.pow(2,31) - 1)){
        return res;
    }else if( res < -Math.pow(2,31)){
        return -Math.pow(2,31);
    }else{
        return Math.pow(2,31) - 1;
    }
    function div(n1, n2){
        if(n1 < n2){
            return 0;
        }
        let count = 1, curN2 = n2;
        while ((curN2 + curN2) <= n1){
            count += count;
            curN2 += curN2;
        }
        return count + div(n1 - curN2, n2);
    }
}


function divide(dividend,divisor){
    let d1 = dividend, d2 = divisor;
    if(d1 < 0 || d2 < 0 || (d1 < 0 && d2 < 0)){
        d1 = d1 < 0 ? -d1 : d1;
        d2 = d2 < 0 ? -d2 : d2;
    }
    if(d1 === 0){
        return 0;
    }
    let res = 1, curDivisor = d2;
    while (curDivisor < d1){
        curDivisor += d2;
        res++;
        if(d1 - curDivisor < d2){
            break;
        }
    }
    // console.log(res);
    // console.log(divisor,dividend)
    if((dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0)){
        return  -res;
    }else{
        return res;
    }
}

// console.log(divide(11,2));

function divide1(dividend,divisor){
    let d1 = dividend, d2 = divisor;
    if(d1 < 0 || d2 < 0 || (d1 < 0 && d2 < 0)){
        d1 = d1 < 0 ? -d1 : d1;
        d2 = d2 < 0 ? -d2 : d2;
    }
    if(d1 === 0){
        return 0;
    }
    let res = 0;
    while (d1 >= d2){
        res = res + 1;
        d1 = d1 + d2;
    }
    if((dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0)){
        res = -res;
    }
    if(res >= -Math.pow(2,31) && res <= (Math.pow(2,31) - 1)){
        return res;
    }else if( res < -Math.pow(2,31)){
        return -Math.pow(2,31)
    }else{
        return Math.pow(2,31) - 1
    }
}

// console.log(divide1(-2147483648,1))

function divide2(dividend,divisor){
    let d1 = dividend, d2 = divisor;
//    负数取正数
    if(d1 < 0 || d2 < 0 || (d1 < 0 && d2 < 0)){
        d1 = d1 < 0 ? -d1 : d1;
        d2 = d2 < 0 ? -d2 : d2;
    }
    if(d1 === 0 || d1 < d2){
        return 0;
    }
    if(d1 === d2){
        return 1;
    }
    // console.log(d1,d2)
//   先通过位运算得出商的大的范围
//    每次将d2 * (2 ^1,2 ^ 2,2 ^ 3...)
    let i = 1, cur1 = 1, maxRange = [],res = 1;
    while (cur1 < d1){
        cur1 = d2 * Math.pow(2,i);
        i++;
    }
    let before = d2 * Math.pow(2,i - 2);
    if(dividend - before <= d2){
        res = Math.pow(2,i - 2);
        // console.log(res);
    }else{
        // console.log(cur1,i);
        let left = Math.pow(2, i - 2), right = Math.pow(2,i - 1);
        maxRange[0] = i - 2;
        maxRange[1] = i - 1;
        // if(right - left <= 2){
        //     return left + 1;
        // }else{
        //     maxRange[0] = i - 2;
        //     maxRange[1] = i - 1;
        // }
        // console.log(maxRange);

//    再通过从左边累加d2,从右边累加d2，确定具体的商的值
//    结束条件为d1 - cur2 <= d2
        let leftI = maxRange[0], leftCur = d2 << leftI ,times = 0;
        while (d1 - leftCur >= d2){
            leftCur += d2;
            times++;
        }
        // console.log(leftCur,times);
        res = left + times;
        // console.log(res);
    }
    if((dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0)){
        res = -res;
    }
    if(res >= -Math.pow(2,31) && res <= (Math.pow(2,31) - 1)){
        return res;
    }else if( res < -Math.pow(2,31)){
        return -Math.pow(2,31)
    }else{
        return Math.pow(2,31) - 1
    }
}

// console.log(divide2(-10,-3));

function main(){
    let testTime = 100000;
    for(let i = 0; i < testTime; i++){
        let di1 = Math.floor(Math.random() * Math.pow(2,31));
        let di2 = Math.floor(Math.random() * Math.pow(2,30));
        di2 = di2 === 0 ? Math.random() * Math.pow(2,20) : di2;
        let res1 = Math.floor(di1 / di2);
        let res2 = divide3(di1,di2);
        if(res1 !== res2){
            console.log(di1,di2)
            console.log(res1);
            console.log(res2);
            console.log('失败！');
            break;
        }
    }
    console.log('成功！')
}
// main()