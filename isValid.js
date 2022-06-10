//有效的括号（https://leetcode.cn/problems/valid-parentheses/）




function isValid(s){
    if(s === null || s.length < 2 || s.length % 2 !== 0){
        return false;
    }
    class Stack{
        constructor(){
            this.data = [];
            this.size = 0;
        }
        getSize(){
            return this.size;
        }
        isEmpty(){
            return this.size === 0;
        }
        push(value){
            this.data[this.size] = value;
            this.size++;
        }
        pop(){
            if(!this.isEmpty()){
                let removedValue = this.data[this.size - 1]
                this.data[this.size - 1] = null;
                this.size--;
                return removedValue;
            }else{
                return null;
            }
        }
    }
    function isMatch(s1,s2){
        let helpArr = ['()','[]','{}'];
        for(let i = 0; i < helpArr.length; i++){
            if(s1 + s2 === helpArr[i]){
                return true;
            }
        }
        return false;
    }
    let stack = new Stack();
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
            // console.log(stack)
        }else{
                let s1 = stack.pop();
                if(!isMatch(s1,s[i])){
                    return false;
                }
            }
    }
    return stack.isEmpty();
}

console.log(isValid("[]"));
//([{}])
//()[]}{