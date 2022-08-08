/**
 * @param {number[]} nums
 * @return {number}
 */
// fastest way to do this is the return method in javascript
 var singleNumber = function(nums) {
    return nums.reduce((accum, elem) => accum ^ elem, 0);
    
};

//time: O(n)
//space: O(1)