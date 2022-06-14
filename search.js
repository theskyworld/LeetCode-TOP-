//搜索旋转排序数组（https://leetcode.cn/problems/search-in-rotated-sorted-array/）

function search(nums,target){
    if(nums === null || nums.length < 1 || (nums.length === 1 && nums[0] !== target)){
        return -1;
    }
    return binary(0,nums.length - 1);
    function binary(l, r){
        let res = -1;
        if(l >= r){
            if(nums[l] === target){
                return l;
            }else{
                return -1;
            }
        }
        let m = l + ((r - l) >> 1);
        if(nums[m] === target){
            return m;
        }else if(nums[m] > target){
            let res1 = binary(l, m - 1);
            let res2 = binary(m + 1, r)
            res = res1 !== -1 ? res1 : res2;
        }else{
            let res1 = binary(m + 1, r);
            let res2 = binary(l, m - 1);
            res = res1 !== -1 ? res1 : res2;
        }
        res = res === undefined ? -1 : res;
        return res;
    }
}

console.log(search([1,3,6],3))