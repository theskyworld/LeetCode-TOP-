//接雨水（https://leetcode.cn/problems/trapping-rain-water/）

function trap(height){
    if(height === null || height.length < 3){
        return 0;
    }
    let res = 0, l = 0, lMax = 0, r = height.length - 1, rMax = 0;
    while (l < r){
        lMax = Math.max(lMax,height[l]);
        rMax = Math.max(rMax,height[r]);
        if(lMax < rMax){
            res += lMax - height[l++];
        }else{
            res += rMax - height[r--];
        }
    }
    return res;
}

// console.log(trap([4,2,0,3,2,5]))


//https://leetcode.cn/problems/trapping-rain-water/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-8/
//按行求水量
//计算每一行中总共能得到的水量
function trap1(height){
    let res = 0;
    //记录整个height中最大的高度，以便确定最终的行数
    let maxHeight = getMax(height);
    //i表示第i行，以及该行判断是否需要结算水量的高度，i同时也表示该行最大的高度
    for(let i = 1; i <= maxHeight; i++){
        //记录在第i行中，当前位置的水量（但不一定是有效的水量）
        let tempWater = 0;
        //是否开始更新tempWater，往tempWater中赋值
        let isSet = false;
        for(let j = 0; j < height.length; j++){
            //如果当前位置（j位置）的高度小于i，并且开始更新tempWater，tempWater每次就只+1
            if(isSet && height[j] < i){
                tempWater++;
            }
            //如果当前位置的高度>=i,表示之前累加的tempWater为有效的水量，将其累加到res中
            if(height[j] >= i){
                res += tempWater;
                //同时将tempWater重新赋值为0，继续重新开始累加
                tempWater = 0;
                //在每一行中，只有但第一次出现了当前位置的高度>=i时，才开始更新tempWater
                isSet = true;
            }
        }
    }
    return res;
    function getMax(h){
        let res = 0;
        h.forEach(v=>{res = v > res ? v : res})
        return res;
    }
}

//按列求水量
//计算每一列实际能得到的水量
function trap2(height){
    let res = 0;
//最两端的两列不会有水量，列数的索引从1开始，到length - 2结束
    for(let i = 1; i < height.length - 1; i++){
    //    找i的左边最大的高度
        let lMax = 0;
        for(let j = i - 1; j >= 0; j--){
            if(height[j] > lMax){
                lMax = height[j];
            }
        }
    //    找i的右边最大的高度
        let rMax = 0;
        for(let j = i + 1; j < height.length; j++){
            if(height[j] > rMax){
                rMax = height[j];
            }
        }
    //    取lMax和rMax的较小值，作为i列水量的计算依据
        let minMax = Math.min(lMax, rMax);
    //    只有当较小值的高度大于当前列的高度时才会有有效的水量
        if(minMax > height[i]){
            res += (minMax - height[i]);
        }
    }
    return res;
}

//动态规划
//在按列求水量的解法中,对于每一列,都需要求其左边最高的的高度和右边最高的高度,需要进行多次重复的遍历过程
//因此通过动态规划进行优化
//准备两个数组,其中一个记录第i列左边最高的高度,另外一个记录第i列右边最高的高度

function trap3(height){
    let res = 0;
    //记录第i列左右两边的最大高度,用于动态规划
    let lMaxHeight = new Array(height.length).fill(0);
    let rMaxHeight = new Array(height.length).fill(0);
    for(let i = 1; i < height.length - 1; i++){
        lMaxHeight[i] = Math.max(lMaxHeight[i - 1], height[i - 1]);
    }
    for(let i = height.length - 2; i >= 0; i--){
        rMaxHeight[i] = Math.max(rMaxHeight[i + 1], height[i + 1]);
    }
//    结合动态规划,采用按列求的解法,得出最后的res
    for(let i = 1; i < height.length - 1; i++){
        let minMax = Math.min(lMaxHeight[i], rMaxHeight[i]);
        if(minMax > height[i]){
            res += (minMax - height[i]);
        }
    }
    return res;
}

//双指针
//在动态规划中,因为lMaxHeight数组和rMaxHeight数组中的元素都是只用一次,后面就不会再被使用了
//所以使用双指针来代替两个数组,确定i位置左右两边的最高高度
function trap4(height){
    let res = 0;
    //记录i位置左右两侧最高高度的指针
    let l = 1, r = height.length - 2;
    let lMax = 0, rMax = 0;
    for(let i = 1; i < height.length - 1; i++){
        if(height[l - 1] < height[r + 1]){
            lMax = Math.max(lMax, height[l - 1]);
            let minMax = lMax;
            if(minMax > height[l]){
                res += minMax - height[l];
            }
            l++;
        }else{
            rMax = Math.max(rMax, height[r + 1]);
            let minMax = rMax;
            if(minMax > height[r]){
                res += minMax - height[r];
            }
            r--;
        }
    }
    return res;
}

//栈
//如果当前位置的高度小于栈顶的高度,入栈,指针++
//如果当前位置的高度大于栈顶的高度,出栈.计算当前的高度和栈顶高度之间的差值,得出当前的水量.
//重复第2步,直至当前位置的高度不大于栈顶的高度或者栈为空.
//然后重复第1步

function trap5(height){
    class Stack{
        constructor(){
            this.data = [];
            this.size = 0;
        }
        getSize(){
            return this.size;
        }
        isEmpty(){
            return this.size === 0;
        }
        push(value){
            this.data[this.size] = value;
            this.size++;
        }
        pop(){
            if(!this.isEmpty()){
                this.size--;
                return this.data[this.size];
            }else{
                return null;
            }
        }
        peek(){
            if(!this.isEmpty()){
                return this.data[this.size - 1];
            }
        }
    }
    let res = 0;
    let stack = new Stack();
    let cur = 0;
    while (cur < height.length){
        while (!stack.isEmpty() && height[cur] > height[stack.peek()]){
            let h = height[stack.peek()];
            stack.pop();
            if(stack.isEmpty()){
                break;
            }
            let distance = cur - stack.peek() - 1;
            let min = Math.min(height[stack.peek()], height[cur]);
            res += distance * (min - h);
        }
        stack.push(cur);
        cur++;
    }
    return res;
}
