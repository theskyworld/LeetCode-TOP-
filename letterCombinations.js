//电话号码的字母组合（https://leetcode.cn/problems/letter-combinations-of-a-phone-number/）

function letterCombinations(digits){
    if(digits === null || digits.length < 1){
        return [];
    }
    let res = [];
    if(digits.length === 1){
        return getLetters(digits);
    }
    if(digits.length === 2){
        let letters1 = getLetters(digits[0]);
        let letters2 = getLetters(digits[1]);
        for(let i = 0 ; i < letters1.length; i++){
            for (let j = 0 ; j < letters2.length; j++){
                res.push(letters1[i] + letters2[j]);
            }
        }
    }
    if(digits.length === 3){
        let letters1 = getLetters(digits[0]);
        let letters2 = getLetters(digits[1]);
        let letters3 = getLetters(digits[2]);
        for(let i = 0; i < letters1.length; i++){
            for(let j = 0; j < letters2.length; j++){
                for(let k = 0; k < letters3.length; k++){
                    res.push(letters1[i] + letters2[j] + letters3[k]);
                }
            }
        }
    }
    if(digits.length === 4){
        let letters1 = getLetters(digits[0]);
        let letters2 = getLetters(digits[1]);
        let letters3 = getLetters(digits[2]);
        let letters4 = getLetters(digits[3]);
        for(let i = 0; i < letters1.length; i++){
            for(let j = 0; j < letters2.length; j++){
                for(let k = 0; k < letters3.length; k++){
                    for(let l = 0; l < letters4.length; l++)
                    res.push(letters1[i] + letters2[j] + letters3[k] + letters4[l]);
                }
            }
        }
    }
    function getLetters(num){
        switch (num){
            case '2' : return ['a','b','c'];
            case '3' : return ['d','e','f'];
            case '4' : return ['g','h','i'];
            case '5' : return ['j','k','l'];
            case '6' : return ['m','n','o'];
            case '7' : return ['p','q','r','s'];
            case '8' : return ['t','u','v'];
            case '9' : return ['w','x','y','z'];
        }
    }
    return res;
}

console.log(letterCombinations('2357'))