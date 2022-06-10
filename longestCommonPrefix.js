//最长公共前缀（https://leetcode.cn/problems/longest-common-prefix/）

function longestCommonPrefix(strs){
    if(strs === null || strs.length < 1){
        return '';
    }
    //如果strs中只存在一个非undefined的字符串
    if(strs.length === 1){
        return strs[0];
    }
    //shortestLength记录strs中所有字符串中长度最短的那个字符串
    let isSame = true, res = '', j = 0, shortestLength = Number.MAX_SAFE_INTEGER;
    while(isSame){
        //比较的依据
        //第一个字符串的第一个、第二个、第三个...字符，作为后面字符串进行字符比较的依据
        let firstS = strs[0][j];
        // console.log(firstS)
        //遍历strs中所有的字符串，找出长度最短的那个，同时第二个及之后的字符串与第一个字符串进行字符的比较
        for(let i = 0; i < strs.length; i++){
            shortestLength = Math.min(shortestLength,strs[i].length);
            //只要存在了不一样的字符，内外层循环就终止，返回之前得到的res
            if(strs[i][j] !== firstS){
                isSame = false;
                break;
            }
        }
        if(isSame)
            res += firstS;
        // console.log(shortestLength);
        j++;
        //如果所有字符串中最短的那个字符串刚好是最长公共前缀，则停止所有循环，返回res
        if(j === shortestLength)
            isSame = false;
        //如果最短的那个字符串是undefined('')或者所有的字符串都是''
        if(shortestLength === 0){
            res = '';
            isSame = false;
        }
    }
    return res;
}

// console.log(longestCommonPrefix(['','']))
