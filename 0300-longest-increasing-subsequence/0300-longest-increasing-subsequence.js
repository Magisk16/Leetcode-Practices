/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(arr) {
    let n =arr.length;
let dp=new Array(n).fill(1);

for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        if(arr[i]>arr[j] && dp[i]<=dp[j]){
            dp[i] = 1+dp[j];
        }
    }
}
    let res = dp.reduce((acc, value) => {
    return (acc = acc > value ? acc : value);
  }, 0);
    return res
    
};