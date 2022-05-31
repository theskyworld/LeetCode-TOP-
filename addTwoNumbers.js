//两数相加
//给定两个非空链表，表示两个非负的整数，
// 链表中的每位数字相对于整数都是按照逆序方式存储的，并且每个节点只能存储一位数字
//将两个数相加，并以相同的形式返回一个表示和的链表

function ListNode(val,next){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}
function addTwoNumbers(l1,l2){
    if(l1 === null || l2 === null){
        return;
    }
    let res = new ListNode(0,null);
    // console.log(l1.head,l2.head)
    process(res,l1,l2);
    function process(curSumNode,curl1Node,curl2Node){
        if(curl1Node === null && curl2Node === null){
            return;
        }
        if(curl1Node === null){
            curl1Node = new ListNode(0,null);
        }
        if(curl2Node === null){
            curl2Node = new ListNode(0,null);
        }
        // console.log(curSumNode)
        let curSum = curl1Node.val + curl2Node.val + curSumNode.val;
        // console.log(curl1Node.value,curl2Node.value,curSum)
        //大于10时进位
        if(curSum >= 10){
            curSumNode.val = curSum - 10;
            // console.log(curSumNode)
            curSumNode.next = new ListNode(1,null);
        }else{
            curSumNode.val = curSum;
            if(curl1Node.next !== null || curl2Node.next !== null){
                curSumNode.next = new ListNode(0,null);
            }
        }
        process(curSumNode.next,curl1Node.next,curl2Node.next);
    }
    return res;
}
// const l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);
// console.log(l1);
//
// const l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);
// console.log(l2);
// const l1 = new ListNode(0);
// const l2 = new ListNode(0);
// console.log(addTwoNumbers(l1,l2))