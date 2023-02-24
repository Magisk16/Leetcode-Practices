/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(arr) {
    arr = arr.sort((a,b)=>a-b);
let max=0;
for(let i=1;i<arr.length;i++){
    let sub = arr[i]-arr[i-1];
    if(sub>max){
        max =sub
    }
}
    return max;
};