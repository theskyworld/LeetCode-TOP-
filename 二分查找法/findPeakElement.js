//寻找峰值（https://leetcode.cn/problems/find-peak-element/）

// https://leetcode.cn/problems/find-peak-element/solution/gong-shui-san-xie-noxiang-xin-ke-xue-xi-qva7v/
//因为数组长度至少为1，数组两端-1和nums.length的位置看作负无穷和相邻元素不相等的前提条件，则对于任意数组而言，一定存在峰值
//如果对于当前位置而言，存在nums[m] > nums[m - 1]，则m的右边一定存在峰值，往右边继续递归
//                  存在nums[m] > nums[m + 1]，则m的左边一定存在峰值，往左边继续递归
function findPeakElement(nums){
    nums[-1] = nums[nums.length] = Number.MIN_SAFE_INTEGER;
    return process(0,nums.length);
    function process(l, r){
        if(l >= r){
            return l;
        }
        let m = l + ((r - l) >> 1);
        if(nums[m] > nums[m + 1] && nums[m] > nums[m - 1]){
            return m;
        }else if(nums[m] < nums[m + 1]){
            return process(m + 1, r);
        }else{
            return process(l,m - 1);
        }
    }
}
