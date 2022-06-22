//x的平方根（https://leetcode.cn/problems/sqrtx/comments/）
// https://leetcode.cn/problems/sqrtx/solution/x-de-ping-fang-gen-by-leetcode-solution/
//二分法
//找满足m^2 <= x的最大m值
function mySqrt(x){
    let l = 0, r = x, res = -1;
    while(l <= r){
        let m = l + ((r - l) >> 1);
        if(m * m <= x){
            res = m;
            l = m + 1;
        }else{
            r = m - 1;
        }
    }
    return res;
}

//袖珍计算器算法
//使用指数函数exp和对数函数ln来代替平方根函数
//对x求平方根，可以计算为x ^ 1/2 = (e ^ lnx) ^ 1/2 = e ^ (1/2 * lnx)
function mySqrt1(x){
    if(x === 0){
        return 0;
    }
    let res = Math.exp(0.5 * Math.log(x));
    res = Math.floor(res);
    return (res + 1) * (res + 1) <= x ? res + 1 : res;
}

//牛顿迭代法
