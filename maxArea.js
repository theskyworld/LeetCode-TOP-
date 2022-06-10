//盛最多水的容器(https://leetcode.cn/problems/container-with-most-water/)

function maxArea(height){
    if(height === null || height.length < 2){
        return 0;
    }
    let res = 0, maxWater = 0;
    // for(let l = 0; l < height.length - 1; l++){
    //     for(let r = height.length - 1; r > l; r--){
    //         let water = Math.min(height[l],height[r]) * (r - l);
    //         if(water > maxWater){
    //             maxWater = water;
    //         }
    //     }
    //     if(maxWater > res){
    //         res = maxWater;
    //     }
    // }
    // return res;
    let l = 0, r = height.length - 1;
    while(r > l){
        maxWater = Math.max(maxWater,Math.min(height[l],height[r]) * ( r - l));
        res = Math.max(res,maxWater);
        if(height[l] > height[r]){
            r--;
        }else{
            l++;
        }
    }
    return res;
}

console.log(maxArea([2,3,4,5,18,17,6]))
