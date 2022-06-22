//寻找比目标字母大的最小字母（https://leetcode.cn/problems/find-smallest-letter-greater-than-target/）

function nextGreatestLetter(letters,target){
//    创建letters的ascii码数组
    let sArr = [];
    letters.forEach(v=>{sArr.push(v.codePointAt(0))});
    // console.log(sArr);
    //创建target的ascii码
    let tAscii = target === 'z' ? 96 : target.codePointAt(0);
    return process(-1, sArr.length);
    function process(l, r){
        if(l + 1 >= r){
            if(sArr[l + 1] >= tAscii){
                return String.fromCodePoint(sArr[l + 1]);
            }else{
                return letters[0];
            }
        }
        let m = l + (( r - l) >> 1);
        if(sArr[m] === tAscii){
            let i = m;
            while(sArr[i] === sArr[i + 1]){
                i++;
            }
            if(i < sArr.length - 1){
                return String.fromCodePoint(sArr[i + 1]);
            }else{
                return letters[0];
            }
        }else if(sArr[m] > tAscii){
            return process(l, m);
        }else{
            return process(m, r);
        }
    }
}

console.log(nextGreatestLetter(['a','b'],'z'))

function nextGreatestLetter1(letters, target){
    let n = letters.length;
    if(target >= letters[n - 1]){
        return letters[0];
    }
    let l = 0, r = n - 1;
    while (l < r){
        let m = l + ((r - l) >> 1);
        if(letters[m] > target){
            r = m;
        }else{
            l  = m + 1;
        }
    }
    return letters[l];
}