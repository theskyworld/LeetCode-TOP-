//https://leetcode.cn/problems/two-sum/
function twoSum(nums,target){
    let gapArr = [];
    let res = [];
    let j = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < gapArr.length; j++){
            if(gapArr[j] + nums[i] === target){
                res[0] = j;
                res[1] = i;
                return res;
            }
        }
        gapArr[j++] = nums[i];
    }
    // let res = [];
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[i] + nums[j] === target){
    //             res[0] = i;
    //             res[1] = j;
    //         }
    //     }
    // }
    // return res;
}

// console.log(twoSum([3,3],6))
function twoSum1(nums,target){
    //存储元素为n时，target - n的差值，索引为差值，值为差值在arr中的索引
    let gap = [];
    let res = [];
    //判断当前元素n是否通过了以下提供的函数，i为n的索引
    nums.some((n,i)=>{
        //如果对于当前元素n，gap中与其对应的差值不为空，返回n的索引和差值的索引
        if(gap[n] !== undefined){
            res = [gap[n],i];
            return true;
        }
        //存储差值在arr中的索引
        gap[target - n] = i;
    })
    return res;
}