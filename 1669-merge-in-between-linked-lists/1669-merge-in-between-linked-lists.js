/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    if(list1.length!=0 && list2.length!=0){
    let tempNode =list1;
    let tempNext =list1;
        for(let i=0;i<a-1;i++){
            tempNode =tempNode.next;
        }
        for(let i=0;i<=b;i++){
            tempNext = tempNext.next;
        }   
        let prev = tempNode;
        let temp2Node = list2;
        prev.next = temp2Node;
        while(temp2Node.next){
            temp2Node = temp2Node.next;
        }
        temp2Node.next = tempNext;
    return list1;
    }
};