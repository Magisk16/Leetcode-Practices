/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        if (area > maxArea) {
            maxArea = area; 
        }

        if (height[left] < height[right]) {
            left++; 
        } else {
            right--; 
        } 
    }

    return maxArea; 
};