//有效的完全平方数（https://leetcode.cn/problems/valid-perfect-square/）
function isPerfectSquare(num){
    if(num === 1){
        return true;
    }
    return process(1,num);
    function process(l, r){
        if(l + 1 >= r){
            return false;
        }
        let m = l + ((r - l) >> 1);
        if(m * m === num){
            return true;
        }else if(m * m < num){
            return process(m , r);
        }else{
            return process(l, m);
        }
    }
}