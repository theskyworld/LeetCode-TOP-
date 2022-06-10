//三数之和（https://leetcode.cn/problems/3sum/）

function threeSum(nums){
    if(nums === null || nums.length < 3){
        return [];
    }
    let n = nums.length;
    //对数组进行排序
    nums.sort((a,b)=>{return a - b});
    let res = [];
    for(let i = 0; i < n; i++){
        //a(nums[i])
        if(nums[i] > 0){
            break;
        }
        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
        }
        let l = i + 1, r = nums.length - 1;
        while (l < r){
            //b(nums[l]),c(nums[r])
            let sum = nums[i] + nums[l] + nums[r];
            if(sum === 0){
                res.push([nums[i],nums[l],nums[r]]);
                //去重，b或者c相同的则跳过
                while (l < r && nums[l] === nums[l + 1]){
                    l++;
                }
                while (l < r && nums[r] === nums[r - l]){
                    r--;
                }
                l++;
                r--;
            }
            //控制b或c的变化
            if(sum < 0){
                l++;
            }else if(sum > 0){
                r--;
            }
        }
    }
    return res;
}

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))