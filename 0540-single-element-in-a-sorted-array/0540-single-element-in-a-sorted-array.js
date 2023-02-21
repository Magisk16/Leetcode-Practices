/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    if(arr.length==1) return arr[0];
    for(let i=1;i<arr.length;){
        if(arr[i]!=arr[i-1]){
          return arr[i-1]
        }
        i+=2
    }
return arr[arr.length-1];
};