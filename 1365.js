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

//can also be like this using for(let the num of nums) in an array
//for(let .. in ...) is to iterate over the properties of an object (the object keys).

var smal= function(nums) {
  //Array.from() = a method that creates a new, shallow-copied Array instance from an array-like or iterable object.
   const sorted = Array.from(nums).sort((a,b) => a - b);
   var res = [];
   for(let x of nums){
     let value = sorted.indexOf(x);
     res.push(value);
   }
   return res;
};