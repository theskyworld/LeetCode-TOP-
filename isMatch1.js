//正则表达式匹配（https://leetcode.cn/problems/regular-expression-matching/）

function isMatch0(s,p){
    if(s === p){
        return true;
    }
    let newP1 = '';
    if(s.length > p.length){
        for(let i = 0; i < p.length; i++){
            newP1 += p[i];
            if(p[i + 1] === '*'){
                let t = 0;
                while(t < s.length - p.length){
                    newP1 += ' ';
                    t++;
                }
            }
        }
    }else if(s.length < p.length){
        let nums = 0;
        for(let i = 0; i  < p.length; i++){
            if(p[i] === '*'){
                nums++;
            }
        }
        if(nums !== p.length - s.length){
            return false;
        }else{
            for(let i = 0; i < p.length; i++){
                if(p[i] !== '*'){
                    newP1 += p[i];
                }
            }
        }
    }else{
        newP1 = p;
    }
    let newP = new Array(newP1.length);
    for(let i = 0; i < newP.length; i++){
        newP[i] = newP1[i];
    }
    console.log(newP);
    if(newP.length !== s.length){
        return false;
    }
    for(let i = 0, j = 0; i < s.length, j < newP.length;){
            console.log(i,j)
            if(s[i] === newP[j]){
                i++;
                j++;
            }else if(s[i] !== newP[j] && (newP[j] !== '.' && newP[j] !== '*') && newP[j] !== ' '){
                return false;
            }else if(newP[j] === '.'){
                i++;
                j++;
            }else if(newP[j] === '*'){
                if(newP[j - 1] === s[i] || newP[j - 1] === '.'){
                    newP[j] = newP[j - 1];
                    i++;
                    j++;
                }else{
                    return false;
                }
            }else if(newP[j] === ' '){
                let before = newP[j - 1], cur = s[i], isSame = true;
                console.log(before,cur)
                if(s[i] !== s[i + 1]){
                    isSame = false;
                }
                if(newP[j + 1] === '*' && isSame === true){
                    if(before !== cur && before !== '.'){
                        return false;
                    }
                }
                newP[j] = before;
                i++;
                j++;
            }
        }
    return true;
}


function isMatch1(s, p){
    if((s === null && p !== null) || (s !== null && p === null)){
        return false;
    }
    let n = s.length, m = p.length;
    if(n === m){
        for(let i = 0, j = 0; i < n, j < m;){
            if(s[i] === p[j]){
                i++;
                j++;
            }else if(s[i] !== p[j]){
                if(p[j] === '.'){
                    i++;
                    j++;
                }else if(p[j] === '*' && (p[j - 1] === s[i] || p[j - 1] === '.')){
                    p[j] = s[i];
                    i++;
                    j++;
                }else{
                    return false;
                }
            }
        }
        return true;
    }
    if(n < m){
        let i = 0, j = 0;
        for(i, j;i < n, j < m;){
            if(s[i] === p [j]){
                i++;
                j++;
            }else if(s[i] !== p[j]){
                if(p[j] === '.'){
                    p[j] = s[i];
                    i++;
                    j++
                }else if(p[j] === '*'){
                    j++;
                }else{
                    return false;
                }
            }
        }
        if(j === m - 1){
            return true;
        }

    }
    if(n > m){
        let i = 0, j = 0;
        for(;i < n, j < m;){
            if(s[i] === p[j]){
                i++;
                j++;
            }else if(s[i] !== p[j]){
                if(p[j] === '*' && (p[j - 1] === s[i] || p[j - 1] === '.')){
                    if(s[i] === s[i - 1]){
                        i++;
                    }
                    j++;
                }else{
                    return false;
                }
            }
        }
        if(i === n - 1)
            return true;
    }
}
// console.log(isMatch1('aab','a*a*b'));
//alllla
//al  *a

//对数器
function generateRandomStra(length){
    let str = '';
    for(let i = 0; i < length; i++){
        //得到97-122之间的字符（26个小写字母）
        str += String.fromCodePoint(Math.ceil((Math.random() * 26) + 96));
    }
    return str;
}

// console.log(generateRandomStra(12))
function generateRandomStrp(length){
    let str = [];
    for(let i = 0; i < length; i++){
        str[i] = String.fromCodePoint(Math.ceil((Math.random() * 26) + 96));
    }
    for(let i = 0; i < 3; i++){
        let randomNum1 = Math.floor(Math.random() * length + 1);
        str[randomNum1] = '.';
        let randomNum = Math.floor(Math.random() * length + 1);
        str[randomNum] = '*'
    }
    let p = '';
    str.forEach(v=>{p += v});
    return p;
}

// console.log(generateRandomStrp(10))

function main(){
    let testTime = 50000;
    for(let i = 0; i < testTime; i++){
        let s = generateRandomStra(15);
        let p = generateRandomStrp(15);
        let res = isMatch1(s,p);
        if(res){
            console.log(s);
            console.log(p);
        }
    }
}
main();

