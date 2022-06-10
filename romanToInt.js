//罗马数字转整型（https://leetcode.cn/problems/roman-to-integer/）

function romanToInt(s){
    if(s === null){
        return 0;
    }
    let res = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'I' && s[i + 1] === 'V'){
            res += 4;
            i = i + 1;
        }else if(s[i] === 'I' && s[i + 1] === 'X'){
            console.log('x')
            res += 9;
            i = i + 1;
        }else if(s[i] === 'X' && s[i + 1] === 'L'){
            res += 40;
            i = i + 1;
        }else if(s[i] === 'X' && s[i + 1] === 'C'){
            res += 90;
            i = i + 1;
        }else if(s[i] === 'C' && s[i + 1] === 'D'){
            res += 400;
            i = i + 1;
        }else if(s[i] === 'C' && s[i + 1] === 'M') {
            res += 900;
            i = i + 1;
        }else if(s[i] === 'I'){
            console.log('x')
            res += 1;
        }else if(s[i] === 'V'){
            res += 5;
        }else if(s[i] === 'X'){
            console.log('x')
            res += 10;
        }else if(s[i] === 'L'){
            res += 50;
        }else if(s[i] === 'C'){
            res += 100;
        }else if(s[i] === 'D'){
            res += 500;
        }else if(s[i] === 'M'){
            res += 1000;
        }
    }
    return res;
}

function romanToInt1(s){
    if(s === null){
        return 0;
    }
    let res = 0;
    for(let i = 0; i < s.length;){
        let cur1 = s[i], after = s[i + 1];
        let cur1Num = getNum(cur1), afterNum = getNum(after);
        if(cur1Num >= afterNum){
            res += cur1Num;
            i += 1;
        }else{
            res += afterNum - cur1Num;
            i += 2;
        }
    }
    function getNum(roman){
        switch(roman){
            case 'I' : return 1;
            case 'V' : return 5;
            case 'X' : return 10;
            case 'L' : return 50;
            case 'C' : return 100;
            case 'D' : return 500;
            case 'M' : return 1000;
            default  : return 0;
        }
    }
    return res;
}

console.log(romanToInt('III'))

