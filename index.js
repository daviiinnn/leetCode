/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var a = [1, 3]
var b = [2]
var c = [3]
var d = [-2,-1]
var fem = function(nums1, nums2) {
    let sa = nums1.concat(nums2).sort(function(a,b){return a - b});
    if(sa.length % 2 === 0){
      return (sa[(sa.length / 2)] + sa[(sa.length / 2) -1]) /2;
    } else {
      return(sa[(sa.length / 2) - 0.5]);
    }
};