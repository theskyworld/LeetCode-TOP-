//找到k个最接近的元素（https://leetcode.cn/problems/find-k-closest-elements/）

function findClosestElements(arr,k,x){
    let res = [], curArr = arr;
    while (res.length < k){
        let resVal = process(curArr,0,curArr.length - 1);
        // console.log(resVal)
        let newArr = [];
        for(let i = 0; i < curArr.length; i++){
            if(i !== resVal){
                newArr.push(curArr[i])
            }
        }
        curArr = newArr;
    }
    function process(curArr,l, r){
        console.log(curArr)
        if(l >= r){
            res.push(curArr[l]);
            return l;
        }
        let m = l + ((r - l) >> 1);
        let gap = (curArr[m] - x) >= 0 ? (curArr[m] - x) : -(curArr[m] - x);
        let lIndex = m - 1;
        while (curArr[lIndex] === curArr[m]){
            lIndex--;
        }
        let lGap = (curArr[lIndex] - x) >= 0 ? (curArr[lIndex] - x) : -(curArr[lIndex] - x);
        let rIndex = m + 1;
        while (curArr[rIndex] === curArr[m]){
            rIndex++;
        }
        let rGap = (curArr[rIndex] - x) >= 0 ? (curArr[rIndex] - x) : -(curArr[rIndex] - x);
        console.log(lIndex,m,rIndex)
        if(lGap <= gap){
            return process(curArr,l, lIndex);
        }else if(rGap < gap){
            return process(curArr,rIndex, r);
        }else{
            res.push(curArr[m]);
            return m;
        }

    }
    console.log(res)
    return res.sort((a,b)=>{return a- b})
}

// console.log(findClosestElements([0,0,1,2,3,3,4,7,7,8],3,5))
//[0,0,1,2,3,7,7,8]

function findClosestElements1(arr,k,x){
    if(arr.length === 1){
        return arr;
    }
    let res = [];
    let closestIndex = process(0,arr.length - 1);
    res.push(arr[closestIndex]);
    let lIndex = closestIndex - 1, rIndex = closestIndex + 1;
    while (res.length < k){
        if(lIndex < 0){
            res.push(arr[rIndex++]);
        }else if(rIndex > arr.length - 1){
            res.push(arr[lIndex--]);
        }else{
            let lGap = (arr[lIndex] - x) >= 0 ? (arr[lIndex] - x) : -(arr[lIndex] - x);
            let rGap = (arr[rIndex] - x) >= 0 ? (arr[rIndex] - x) : -(arr[rIndex] - x);
            res.push(lGap <= rGap ? arr[lIndex--] : arr[rIndex++]);
        }

    }
    return res.sort((a,b)=>{return a - b});
    function process(l, r){
        if(l + 1 >= r){
            let gap1 = (arr[l] - x) >= 0 ? (arr[l] - x) : -(arr[l] - x);
            let gap2 = (arr[l + 1] - x) >= 0 ? (arr[l + 1] - x) : -(arr[l + 1] - x);
            return gap1 <= gap2 ? l : l + 1;
        }
        let m = l + ((r - l) >> 1);
        if(arr[m] === x){
            return m;
        }else if(arr[m] < x){
            return process(m, r)
        }else{
            return process(l,m);
        }
    }
}

console.log(findClosestElements1([1,3,7,9,10,11,15,20],4,12));
