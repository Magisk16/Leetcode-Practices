/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let result = 0
    let firstMax = null;
    let firstMin = null;
    let firstBad = -1;

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (current < minK || current > maxK) {
            firstBad = i;
        }
        if (current === minK) {
            firstMin = i;
        }
        if (current === maxK) {
            firstMax = i;
        }
        if (firstMin !== null && firstMax !== null) {
            const lastStart = Math.min(firstMax, firstMin);
            if (firstBad < lastStart) {
                result += lastStart - firstBad;
            }
        }
    }
return result;
};