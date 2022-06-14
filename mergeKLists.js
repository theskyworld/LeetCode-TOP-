//合并k个升序链表（https://leetcode.cn/problems/merge-k-sorted-lists/）

//常规解法
//先合并前两个有序链表，然后再拿合并后的新链表依次跟下一个链表合并
//再得到新的合并后的链表，再依次跟下一个链表合并
//......
function mergeKLists(lists){
    let nextList1 = merge2Lists(lists[0],lists[1]);
    for(let i = 2; i < lists.length;){
        nextList1 = merge2Lists(nextList1,lists[i]);
    }
    return nextList1;
    //    合并两个升序链表
    function merge2Lists(list1,list2){
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
}

//排序解法
//先依次取出所有链表中每个节点的值，形成一个数组
//然后对数组进行排序
//最后根据排序后的数组生成升序的链表
function mergeKLists1(lists){
    if(lists.length < 1){
        return null
    }
    if(lists.length === 1){
        return lists[0];
    }
    let sortedLists = lists.flat();
    console.log(sortedLists);
    // lists.forEach(v=>sortedLists.push(...v));
    sortedLists.sort((a,b)=>{return a - b});
    // console.log(sortedLists);
    // let res = new ListNode(sortedLists[0]);
    for(let i = 1; i < sortedLists.length; i++){
        // res.next = new ListNode(sortedLists[i]);
    }
    // return res;
}

console.log(mergeKLists1([[1,2,3],[1,3,4],[2,3,4]]));