//全排列(https://leetcode.cn/problems/permutations/)

function permute(nums){
    let res = [], oldNums = nums;
    if(nums.length === 1){
        return [[nums[0]]];
    }
    process(new Array(4).fill(undefined),[6,2,-1,8])
    function process(preArr,curArr){
        if(curArr.length === 0){
            return;
        }
        let res = new Array(4), t = 0, times = 4, i = 0, curPreArr = preArr;
        while (t < times){
            curPreArr[0] = curArr[i++];
            console.log(i,curPreArr);
            res[t++] = curPreArr;
            // console.log(res)
        }

        console.log(res);
    }
    return res;
}

console.log(permute([6,2,-1,8]));

