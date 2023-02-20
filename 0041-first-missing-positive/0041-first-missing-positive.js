/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(arr) {
    let sortedArr = Array.from(new Set(arr)).sort((a,b)=>a-b).filter((a)=>a>0);
let temp=1;
for(let i=0;i<sortedArr.length;i++){
    if(sortedArr[i]!=temp){
        return temp;
    }
    temp++;
}
    return temp;
};