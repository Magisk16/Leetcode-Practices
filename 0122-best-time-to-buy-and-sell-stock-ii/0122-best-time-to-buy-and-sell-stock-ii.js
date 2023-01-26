/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(arr) {
    let arr1 = [...arr];
let arr2 = [...arr];
let decreasing =arr1.sort((a,b)=>b-a);
let increasing = arr2.sort((a,b)=>a-b);
let profit=0;
if(JSON.stringify(arr) == JSON.stringify(decreasing)){
    return 0;
}else{
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1]){
            profit+=(arr[i]-arr[i-1]);
        }
    }
    return profit

}   
};