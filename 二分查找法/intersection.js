//两个数组的交集（https://leetcode.cn/problems/intersection-of-two-arrays/）

function intersection(nums1,nums2){
    let helpArr1 = new Array(1000).fill(0), helpArr2 = new Array(1000).fill(0),res = [];
    nums1.forEach(v=>{helpArr1[v]++})
    nums2.forEach(v=>{nums1.push(v)});
    nums1.forEach(v=>{helpArr2[v]++});
    // console.log(helpArr1,helpArr2)
    for(let i = 0; i < helpArr2.length; i++){
        console.log(i)
        if(helpArr2[i] === 0 || helpArr1[i] === 0){
            continue;
        }else if(helpArr1[i] !== helpArr2[i]){
            res.push(i);
        }
    }
    return res;
}

function intersection1(nums1, nums2){
    let helpArr1 = new Array(1000).fill(0), res = [];
    nums1.forEach(v=>{helpArr1[v] = 1});
    nums2.forEach(v=>{helpArr1[v] = helpArr1[v] === 0 ? 0 : 2})
    // console.log(helpArr1)
    for(let i = 0; i < helpArr1.length; i++){
        // console.log(i)
        if(helpArr1[i] === 0){
            continue;
        }else if(helpArr1[i] === 2){
            res.push(i);
        }
    }
    return res;
}