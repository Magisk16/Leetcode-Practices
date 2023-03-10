/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(node, sum = 0) {
    if(!node) return 0;
    
    if(!node.left && !node.right) {
        return sum * 10 + node.val;
    }
    
    return sumNumbers(node.left, sum * 10 + node.val) + sumNumbers(node.right, sum * 10 + node.val);
};