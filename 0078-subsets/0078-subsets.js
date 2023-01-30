/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(arr) {
    if(arr.length==0) return [[]]
    let firstEle = arr[0];
    let withoutFirstEle = subsets(arr.slice(1));
    let withFirstEle = withoutFirstEle.map((item)=>{
        return [firstEle , ...item]
    })
    return [...withoutFirstEle, ...withFirstEle]
    
};