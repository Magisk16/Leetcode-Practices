/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    if(arr.length<=2) return false;
    let leftMax=[];
let rightMax=[];
let lmax=arr[0]
    for(let i=0;i<arr.length;i++){
    if(lmax<arr[i]){
        leftMax.push(arr[i]);
        lmax =arr[i];
    }else{
        leftMax.push(lmax);
    }
}
    
let rmax=arr[arr.length-1];
for(let i=arr.length-1;i>=0;i--){
    if(rmax<arr[i]){
        rightMax.unshift(arr[i]);
        rmax =arr[i];
    }else{
        rightMax.unshift(rmax);
    }
}
    let calc=0;
let i=0;
for(let i=0;i<arr.length;i++){
    // if(arr[i]<leftMax[i] && arr[i]<rightMax[i]){
    calc += (Math.min(leftMax[i],rightMax[i]))-arr[i]
}
    return calc;
};