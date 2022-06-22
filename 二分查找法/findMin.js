//寻找旋转排序数组中的最小值(https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)

function findMin(nums){
    let n = nums.length;
    return process(0,n - 1);
    function process(l, r){
        if(l >= r){
            return nums[l];
        }
        let m = l + ((r - l) >> 1);
        if(nums[m] > nums[m + 1] && nums[m] > nums[m - 1]){
            return nums[m + 1];
        }
        if(nums[m] < nums[m + 1] && nums[m] < nums[m - 1]){
            return nums[m];
        }else if(nums[m] > nums[n - 1]){
            return process(m + 1, r);
        }else{
            return process(l, m - 1);
        }
    }
}