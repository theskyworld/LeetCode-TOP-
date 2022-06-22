//搜索长度未知的有序数组（https://leetcode.cn/problems/search-in-a-sorted-array-of-unknown-size/）

function searchInUnknownLength(reader, target){
    let half = target - reader.get(0);
    let l = 0, r = 2 * half;
    return process(l, r);
    function process(l, r){
        if(l >= r){
            return reader.get(l) === target ? l : -1
        }
        let m = l + ((r - l) >> 1);
        if(reader.get(m) === target){
            return m;
        }else if(reader.get(m) < target){
            return process(m + 1, r);
        }else{
            return process(l, m - 1);
        }
    }
}