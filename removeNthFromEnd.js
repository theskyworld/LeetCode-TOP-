//删除链表的倒数第n个节点（https://leetcode.cn/problems/remove-nth-node-from-end-of-list/）


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function removeNthFromEnd(head,n) {
    if (head === null || head.length < 1) {
        return head;
    }
    if (n > head.length) {
        return head;
    }
    let fatherNode = head, i = 0;
    if(n === head.length){
        head = null
    }else{
        while (i < head.length - n - 1){
            fatherNode = fatherNode.next;
        }
        let nextNode = fatherNode.next.next;
        fatherNode.next.next = null;
        fatherNode.next = nextNode;
    }

    return head;
}

console.log(removeNthFromEnd([1,2,3,4,5],2));