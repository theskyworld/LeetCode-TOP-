//实现 strStr()(https://leetcode.cn/problems/implement-strstr/)

function strStr(haystack,needle){
    if(needle === null){
        return 0;
    }
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            let j = 1;
            while(j < needle.length){
                if(haystack[i + j] === needle[j]){
                    j++;
                }else{
                    break;
                }
            }
            if(j === needle.length){
                return i;
            }
        }
    }
    return -1;
}