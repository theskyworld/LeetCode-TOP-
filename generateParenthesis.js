//括号生成（https://leetcode.cn/problems/generate-parentheses/）

//暴力解法
// function generateParenthesis(n){
//     if(n === 1){
//         return ['()']
//     }
//     let arr = [], res = [];
//     for(let i = 0; i < 2 * n; i++){
//         if(i >= 0 && i < n){
//             arr.push('(');
//         }else{
//             arr.push(')');
//         }
//     }
//     // console.log(arr);
//     let helpArr = [];
//     for(let i = 0; i < arr.length; i++){
//         helpArr[i] = arr[i];
//     }
//     // console.log(helpArr)
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//                 swap(i, j);
//                 let cur = '';
//             // console.log(arr)
//                 arr.forEach(v => {
//                     cur += v
//                 });
//                 // console.log(cur)
//                 if (isValid(cur) ) {
//                     res.push(cur);
//                 }
//                 arr = helpArr;
//         }
//     }
//     function swap(i,j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     function isValid(s){
//         if(s === null || s.length < 2 || s.length % 2 !== 0){
//             return false;
//         }
//         class Stack{
//             constructor(){
//                 this.data = [];
//                 this.size = 0;
//             }
//             getSize(){
//                 return this.size;
//             }
//             isEmpty(){
//                 return this.size === 0;
//             }
//             push(value){
//                 this.data[this.size] = value;
//                 this.size++;
//             }
//             pop(){
//                 if(!this.isEmpty()){
//                     let removedValue = this.data[this.size - 1]
//                     this.data[this.size - 1] = null;
//                     this.size--;
//                     return removedValue;
//                 }else{
//                     return null;
//                 }
//             }
//         }
//         function isMatch1(s1,s2){
//             let helpArr = ['()','[]','{}'];
//             for(let i = 0; i < helpArr.length; i++){
//                 if(s1 + s2 === helpArr[i]){
//                     return true;
//                 }
//             }
//             return false;
//         }
//         let stack = new Stack();
//         for(let i = 0; i < s.length; i++){
//             if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
//                 stack.push(s[i]);
//                 // console.log(stack)
//             }else{
//                 let s1 = stack.pop();
//                 if(!isMatch1(s1,s[i])){
//                     return false;
//                 }
//             }
//         }
//         return stack.isEmpty();
//     }
//     return res;
// }
//生成所有可能的组合方式，然后检查每一个是否有效
function generateParenthesis(n){
    let res = [];
    //生成所有可能的组合方式
    generateAll(new Array(2 * n), 0, res);
    function generateAll(cur, j, result){
        // console.log(j)
        //如果该生成的组合方式有效，则添加到res中
        if(j === cur.length){
            // console.log(cur)
            if(isValid(cur)){
                // console.log(cur)
                //数组转字符串
                let curS = '';
                cur.forEach(v=>curS += v);
                result.push(curS);
                // console.log(result)
            }
        //    递归生成所有可能的组合方式
        }else{
            cur[j] = '(';
            generateAll(cur, j + 1, result);
            cur[j] = ')';
            generateAll(cur,j + 1, result);
        }
    }
    function isValid(sArr){
        let balance = 0;
        for(let i = 0; i < sArr.length; i++){
            if(sArr[i] === '('){
                balance++;
            }else{
                balance--;
            }
            if(balance < 0){
                return false;
            }
        }
        return balance === 0;
    }
    return res;
}

console.log(generateParenthesis(8));

//动态规划（https://leetcode.cn/problems/generate-parentheses/solution/zui-jian-dan-yi-dong-de-dong-tai-gui-hua-bu-lun-da/）
//先确定n = 1时的所有可能组合方式为["()"]
//然后n = 2时，就相当于在n = 1的所有组合的方式中新增一个"()"，增加的方式为在外面增加，在里面增加两种

function generateParenthesis1(n){
    if(n === 0){
        return [];
    }
    let allN = [];
    //n = 1时的所有可能组合方式
    allN[1] = ['()']
    let m = 2;
    while(m <= 8){
        let addP = '()';
        allN[m] = [];
        //在n -  1的所有组合方式基础上进行添加
        //遍历n - 1时的所有组合方式
        for(let i = 0; i < allN[m - 1].length; i++){
            //对n - 1中要进行添加新的()的当前括号组合
            let oldP = allN[m - 1][i];
            //    添加到外面
            let x = 1;
            while(x < oldP.length){
                let newP1= '', y = 0;
                if(oldP[x] === ')' && oldP[x - 1] === '('){
                    while (y < oldP.length){
                        newP1 += oldP[y];
                        if(y === x){
                            newP1 += '()';
                        }
                        y++;
                    }
                    if(!allN[m].includes(newP1)){
                        allN[m].push(newP1);
                    }
                    x += 2;
                }else{
                    x++;
                }
            }
            //    添加到里面
            //    遇到当前的为'(',同时下一个为')'时进行添加
            let t = 0;
            while(t < oldP.length){
                // console.log(t)
                let newP2 = '', j = 0;
                if(oldP[t] === '(' && oldP[t + 1] === ')'){
                    while(j < oldP.length){
                        newP2 += oldP[j];
                        if(j === t){
                            // console.log(t)
                            newP2 += '()';
                        }
                        j++;
                    }
                    if(!allN[m].includes(newP2)){
                        allN[m].push(newP2);
                    }
                    t += 2;
                }else{
                    t++;
                }
            }
            // console.log(allN[m]);
        }
        m++;
    }
    return allN[n];

}
// console.log(generateParenthesis1(8));





