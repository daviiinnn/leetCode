/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if (nums.join('') == 0)
        return '0'
    let res = nums.toString().split(',')
    res.sort((a, b) => (b + a) - (a + b))
    return res.join('')
};