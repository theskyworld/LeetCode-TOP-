
function findMinII(nums){
    let n = nums.length;
    return process(0, n - 1);
    function process(l, r){
        if(l >= r || nums[l] < nums[r] || (n ===2 && nums[0] === nums[1])){
            return nums[l];
        }
        let m = l + ((r - l) >> 1), i = m + 1, j = m - 1;
        if(nums[m + 1] === nums[m] || nums[m - 1] === nums[m]){
            while (nums[i] === nums[m]){
                if(i === n - 1){
                    break;
                }
                i++;
            }
            while (nums[j] === nums[m]){
                if(j === 0){
                    break;
                }
                j--;
            }
            // console.log(i,j)
            if(i === n - 1 && j === 0 && nums[m] === nums[i] && nums[m] === nums[j]){
                return nums[m];
            }
        }
        if(nums[m] > nums[n - 1] && nums[m] > nums[j] && nums[m] > nums[i]){
            return nums[i];
        }
        if(nums[m] < nums[n - 1] && nums[m] < nums[i] && nums[m] < nums[j]){
            return nums[m];
        }
        if(nums[m] > nums[j] && nums[m] <= nums[n - 1]){
            return process(l, j);
        }else{
            // console.log('x')
            return process(i, r);
        }
    }
}

function findMinII1(nums){
    let l = 0, r = nums.length - 1;
    while (l < r){
        let m = l + ((r - l) >> 1);
        if(nums[m] < nums[r]){
            r = m;
        }else if(nums[m] > nums[r]){
            l = m + 1;
        }else{
            r -= 1;
        }
    }
    return nums[l];
}