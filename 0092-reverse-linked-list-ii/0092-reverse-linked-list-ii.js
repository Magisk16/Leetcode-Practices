// var reverseBetween = function(head, left, right) {
//      let tempLeft = head;
//         let tempRight = head;
//         let tempList =[];
//     let count =head;
//         let c=0;
//         while(count!=null){
//             count =count.next;
//             c++;
//         }
//     console.log(c)
//         if(c==2& left!=right){
//             let oneNode = head;
//             let twoNode = oneNode.next;
//             head = twoNode;
//             twoNode.next = oneNode;
//             oneNode.next =null;
            
//         }    
    
//     else{
//     for(let i=0;i<left-1;i++){
//             tempLeft =tempLeft.next;
//         }
//         for(let i=0;i<right-1;i++){
//             tempRight =tempRight.next;
//         }
//         let last = tempRight.next;
//         for(let i=tempLeft;i!=tempRight.next;){
//             tempList.push(i);
//             i =i.next;
//         }
//         tempList.reverse();
//         // console.log(tempList);
//         let firstTemp =head;
//         let lastTemp =head;
//         tempList = changeLinkArray(tempList);
//         // console.log(tempList);
//         for(let i=1;i<left-1;i++){
//             firstTemp = firstTemp.next;
//         }
//         for(let i=1;i<right;i++){
//             lastTemp = lastTemp.next;
//         }
        
//         firstTemp.next = tempList[0];
//         tempList[tempList.length-1].next = last;
//     }
//     return head
// };
// function changeLinkArray(arr) {
//         for(let i = 0; i < arr.length-1; i++) {
//             arr[i].next = arr[i+1];
//         }

//         return arr;
//     }

var reverseBetween = function(head, left,right){
    const dummy = new ListNode();
    dummy.next =head
    let prev = dummy;
    let curr =head;
    for(let i=1;i<left;i++){
        prev =curr;
        curr =curr.next;
    }
    const front =prev;
    const back = curr;
    for(let i=left;i<=right;i++){
        [curr.next, prev, curr] = [prev,curr,curr.next];
    }
    front.next = prev;
    back.next = curr;
    return dummy.next;
    
}