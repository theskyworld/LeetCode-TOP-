// 在排序数组中查找元素的第一个和最后一个位置(https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)

function searchRange(nums,target){
    let n = nums.length;
    let res = new Array(2).fill(-1);
    //注意此处的l和r分别为-1和nums.length,避免process(l, m)，process(m, r)，数组长度为1和2时溢出的情况
    process(-1,nums.length);
    return res;
    function process(l, r){
        //注意此处为l + 1 >= r，而不是l >= r，避免process(l, m)，process(m, r)，递归到只剩下一个元素时溢出的情况
        if(l + 1 >= r){
            return nums[l] === target ? l : -1;
        }
        let m = l + ((r - l) >> 1);
        if(nums[m] === target){
            if(nums[m + 1] !== target && nums[m - 1] === target){
                res[1] = m;
                let i = m;
                while(nums[i] === target){
                    res[0] = i;
                    i -= 1;
                }
            }else if(nums[m - 1] !== target && nums[m + 1] === target){
                res[0] = m;
                let i = m;
                while(nums[i] === target){
                    res[1] = i;
                    i += 1;
                }
            }else if(nums[m + 1] !== target && nums[m - 1] !== target){
                res[0] = m;
                res[1] = m;
            }else{
                let i = m;
                let j = m;
                while(nums[i] === target){
                    res[0] = i;
                    i -= 1;
                }
                while(nums[j] === target){
                    res[1] = j;
                    j += 1;
                }
            }
        }else if(nums[m] > target){
            //r为m而不是m - 1，l为m而不是m + 1，出于将边界值（第一个和最后一个值）作为递归过程中取m值之后进行if(nums[m] === target)的判断考虑，而不是作为if(l + 1 >= r)时的返回值进行考虑
            process(l, m);
        }else{
            process(m, r);
        }
    }
}

function searchRange1(nums,target){
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