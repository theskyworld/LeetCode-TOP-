//删除有序数组中的重复项（https://leetcode.cn/problems/remove-duplicates-from-sorted-array/）

function removeDuplicates(nums){
    if(nums === null){
        return 0
    }
    let res = nums.length;
    if(nums.length < 2){
        return res;
    }
    let i = 0, j = 1;
    while (i < nums.length && j < nums.length){
        if(nums[j] === nums[i]){
            res--;
            j++
        }else{
            if(i === 0){
                nums[i + 1] = nums[j];
                // swap(j, i + 1);
                i++;
                j++;
            }else if(nums[i - 1] !== nums[j]){
                nums[i + 1] = nums[j];
                // swap(j,i + 1);
                i++;
                j++;
            }else{
                j++;
            }
        }
    }
    // console.log(i,j)
    function swap(i,j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    return i + 1;
}

console.log(removeDuplicates([0,0,1,1,1,1,1]))

function removeDuplicates1(nums){
        if (nums.length === 0)
            return 0;
        let i = 1, j = 1;
        while (i < nums.length) {
            if (nums[i - 1] !== nums[i]) {
                nums[j] = nums[i];
                j++;
            }
            i++;
        }
        return j;
}