//合并两个有序链表（https://leetcode.cn/problems/merge-two-sorted-lists/）


function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

function mergeTwoLists(list1,list2){
    if(list1 === null && list2 === null){
        return list1;
    }
    let res = new ListNode(), curNode = res;
    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            curNode.next = list1;
            curNode = curNode.next;
            list1 = list1.next;
        }else{
            curNode.next = list2;
            curNode = curNode.next;
            list2 = list2.next;
        }
    }
    if(list1 !== null){
        curNode.next = list1;
    }
    if(list2 !== null){
        curNode.next = list2;
    }
    return res.next;
}
console.log(mergeTwoLists([1,2,4],[1,3,4]));