//缺失的第一个正数(https://leetcode.cn/problems/first-missing-positive/)

function firstMissingPositive(nums){
    if(nums === null || nums.length < 1 || (nums.length === 1 && nums[0] !== 1)){
        return 1;
    }
    let res = 1;
    nums.sort((a,b)=>{return a - b});
    // console.log(nums);
    let cur = 1;
    for(let i = 0; i < nums.length;){
        if(nums[i] < 1){
            i++;
        }else{
            // console.log(i)
            if((nums[i] === cur && nums[i + 1] !== cur + 1)){
                res = cur + 1;
                i++;
            }else if(nums[i] === cur && nums[i + 1] === cur + 1){
                cur = cur + 1;
                i++;
            }else{
                i++;
            }
        }

    }
    return res;
}

// console.log(firstMissingPositive([1,2,2]))

function firstMissingPositive1(nums){
    if(nums === null || nums.length < 1 || (nums.length === 1 && nums[0] !== 1)){
        return 1;
    }
    let res = 1;
    res = process(nums,res);
    function process(nums, res){
        if(nums.length === 1){
            return nums[0] === res ? res + 1 : res;
        }
        let helpArr = [];
        for(let i = 0; i < nums.length; i++){
            if(nums[i] > res){
                helpArr.push(nums[i]);
            }else if(nums[i] === res){
                res += 1;
            }
        }
        if(helpArr.length !== nums.length){
            res = process(helpArr, res);
        }
        return res;
    }
    return res;
}

// console.log(firstMissingPositive1([2,1]));

function firstMissingPositive12(nums){
    if(nums === null || nums.length < 1 || (nums.length === 1 && nums[0] !== 1)){
        return 1;
    }
    let res = 1, i = 0, j = 0, c = 1;
    while (i < nums.length){
        if(nums[i] > res){
            j = i + c;
            if(j === nums.length){
                break;
            }else{
                swap(i, j);
                c++;
            }
        }else if(nums[i] === res){
            res += 1;
            i++;
            c = 1;
        }else{
            i++;
            c = 1;
        }
    }
    function swap(i,j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    return res;
}

console.log(firstMissingPositive12([1,2,3,5,6,2]))
