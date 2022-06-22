//猜数字大小（https://leetcode.cn/problems/guess-number-higher-or-lower/）

function guessNumber(n){
    let l = 1, r = n, res = 0;
    while(l <= r){
        let m = l + ((r - l) >> 1);
        console.log(m)
        let numRes = guess(m);
        // console.log(numRes)
        if(numRes === 0){
            res = m;
            break;
        }else if(numRes === -1){
            r = m - 1;
        }else if(numRes === 1){
            l = m + 1;
        }
    }
    return res;
}
function guessNumber1(n){
    return process(1,n);
    function process(l, r){
        if(l >= r){
            if(guess(l) === 0){
                return l;
            }else{
                return 0 ;
            }
        }
        let m = l + ((r - l) >> 1);
        let guessRes = guess(m);
        if(guessRes === 0){
            return m;
        }else if(guessRes === -1){
            return process(l, m - 1);
        }else{
            return process(m + 1, r);
        }
    }
}
