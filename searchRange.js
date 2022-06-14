// 在排序数组中查找元素的第一个和最后一个位置(https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)

function searchRange(nums,target){
    let res = [-1,-1];
    if(nums === null || nums.length < 1){
        return res;
    }
//    先进行二分找第一个位置
    binary(0, nums.length - 1);
    function binary(l, r){
        if(l >= r){
            if(nums[l] === target){
                res[0] = l;
            }
            return;
        }
        let m = l + ((r - l) >> 1);
        if(nums[m] === target){
            res[0] = m;
        }else if(nums[m] > target){
            binary(l, m -1);
        }else{
            binary(m + 1, r);
        }
    }
    // console.log(curRes);
    let i = res[0], eI = res[0], sI = res[0];
    if(nums[i + 1] === target && nums[i - 1] !== target){
        while (nums[i] === target){
            i++;
        }
        console.log(i)
        eI = i - 1;
        res[1] = eI;
    }else if(nums[i - 1] === target && nums[i + 1] !== target){
        while (nums[i] === target){
            i--;
        }
        eI = i + 1;
        res[0] = eI;
        res[1] = sI;
    }else if(nums[i + 1] === target && nums[i - 1] === target){
        while (nums[i] === target){
            i++;
        }
        eI = i - 1;
        i = res[0];
        while (nums[i] === target){
            i--;
        }
        sI = i + 1;
        res[0] = sI;
        res[1] = eI;
    }else{
        res[1] = eI;
    }
    return res;
}

console.log(searchRange([3,3,3],3))