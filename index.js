/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smal= function(nums) {
  //Array.from() = a method that creates a new, shallow-copied Array instance from an array-like or iterable object.
   const sorted = Array.from(nums).sort((a,b) => a - b);
   var res = [];
   for(let i = 0; i<nums.length; i++){
     let value = sorted.indexOf(nums[i]);
     res.push(value);
   }
   return res;
};

var k = [8,1,2,2,3];
var c = Array.from(k).sort((a,b) => a - b);
var cok = c.indexOf(8)
console.log(smal(k))
console.log(cok)
console.log(c)