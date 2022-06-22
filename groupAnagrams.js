//字母异位词分组（https://leetcode.cn/problems/group-anagrams/）

function groupAnagrams(strs){
    if(strs.length === 1){
        return [strs];
    }
    let newStrs = [], res = [], curRes = [];
    strs.forEach(v=>{newStrs.push(v)});
    //对newStrs中的每个字符串转换成有序的ascii码数组
    for(let i = 0; i < newStrs.length; i++){
        newStrs[i] = strToAsciiArr(newStrs[i]);
    }
    console.log(newStrs)
    for(let i = 0; i < newStrs.length; i++){
        let rI = i;
        curRes.push(strs[rI]);
        for(let j = rI + 1; j < newStrs.length; j++){
            if(isEqual(newStrs[j],newStrs[rI])){
                console.log(curRes,strs[j])
                console.log(newStrs[j],newStrs[rI],j,rI)
                curRes.push(strs[j]);
                swap(j, i + 1);
                i += 1;
            }
        }
        res.push(curRes);
        curRes = [];
    }
    return res;
//    将字符串转换成有序的ascii码数组
    function strToAsciiArr(str){
        let helpArr = [];
        for(let i = 0; i < str.length; i++){
            helpArr.push(str[i].charCodeAt(0));
            helpArr.sort((a,b)=>{return a - b});
        }
        return helpArr;
    }
    function isEqual(arr1,arr2){
        if(arr1.length !== arr2.length || (arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)){
            return false;
        }
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
    }
    function swap(i,j){
        let temp = strs[i];
        strs[i] = strs[j];
        strs[j] = temp;
        let temp1 = newStrs[i];
        newStrs[i] = newStrs[j];
        newStrs[j] = temp1;
    }
}

// console.log(groupAnagrams(['a']))

function groupAnagrams1(strs){
    if(strs.length === 1){
        return [strs];
    }
    let newStrs = [], res = [];
    strs.forEach(v=>{newStrs.push(v)});
    //对newStrs中的每个字符串转换成有序的ascii码数组
    for(let i = 0; i < newStrs.length; i++){
        newStrs[i] = strToAsciiArr(newStrs[i]);
    }
    process(0, 1,strs.length - 1)
    function process(i,l,r){
        let aim = newStrs[i];
        let curRes = [strs[i]];
        if(l >= r){
            if(isEqual(newStrs[l],aim)){
                curRes.push(strs[l]);
                swap(l, i + 1);
            }
            return;
        }
        let m = l + ((r - l) >> 1);
        console.log(m)
        if(isEqual(newStrs[m], aim)){
            curRes.push(strs[m]);
            swap(m, i + 1);
            i += 1;
        }else{
            process(i,l,m - 1);
            process(i,m + 1,r);
        }
        res.push(curRes);
        process(i + 1,i + 2, r)
    }
    function strToAsciiArr(str){
        let helpArr = [];
        for(let i = 0; i < str.length; i++){
            helpArr.push(str[i].charCodeAt(0));
            helpArr.sort((a,b)=>{return a - b});
        }
        return helpArr;
    }
    function isEqual(arr1,arr2){
        if(arr1.length !== arr2.length || (arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)){
            return false;
        }
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
    }
    function swap(i,j){
        let temp = strs[i];
        strs[i] = strs[j];
        strs[j] = temp;
        let temp1 = newStrs[i];
        newStrs[i] = newStrs[j];
        newStrs[j] = temp1;
    }
    return res;
}

console.log(groupAnagrams1(["eat", "tea", "tan", "ate", "nat", "bat"]))