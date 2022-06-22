//第一个错误的版本（https://leetcode.cn/problems/first-bad-version/）

function firstBadVersion(n){
    let res = -1;
    return process(1, n);
    function process(l, r){
        if(l >= r){
            if(isBadVersion(l)){
                return l;
            }else{
                return -1;
            }
        }
        let m = l + ((r - l) >> 1);
        // 如果当前号的版本为错误版本，则继续向左边进行递归，找出第一个错误的版本号
        if(isBadVersion(m)){
            // 此处r为m,而不是m - 1
            //将该次递归的错误版本号m带入下次的递归过程
            //作为下次递归时如果返回值为-1时res的取值
            res = process(l, m);
        }else{
            res = process(m + 1, r)
        }
        // 后处理
        // 如果递归终止时，当前的版本号不为错误版本，则返回上一次的错误版本，上次的m值
        res = res === -1 ? m : res;
        return res;
    }
}

//1 2 3 4 5 6 7 8 9
