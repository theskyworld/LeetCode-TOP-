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
        let mid = l + ((r - l) >> 1);
        if(nums[mid] === target){
            return mid;
        }
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                res = binary(l, mid - 1);
            } else {
                res = binary(mid + 1, r)
            }
        } else {
            if (nums[mid] < target && target <= nums[nums.length - 1]) {
                res = binary(mid + 1, r);
            } else {
                res = binary(l, mid - 1);
            }
        }
        return res;
    }
}

console.log(search([1,3,6],3))