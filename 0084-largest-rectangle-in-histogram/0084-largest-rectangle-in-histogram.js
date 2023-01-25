/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(arr) {
    let maxArea=0;
    const stack =[];
    
   for(let i=0;i<=arr.length;i++){
    let curr = i==arr.length ? 0 : arr[i];
    while(stack.length!=0 && curr <arr[stack.at(-1)]){
        let top = stack.pop();
        let width =stack.length==0 ? i : i - (stack.at(-1))-1; 
        let area = arr[top]*width;
        maxArea = Math.max(area,maxArea);
    }
    stack.push(i);
}
    return maxArea;
};