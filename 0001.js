/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var ans = [];

  for(let i = 0; i< nums.length; i++){
    for(let j = 0; j < nums.length; j++){
      if(j === i){j++}
      
      if(nums[i] + nums[j] === target){
        ans.push(i, j)
      }
    }
    if(ans.length === 2){break;}
  }
  return ans;
};


const a = [3,2,4];
const tar= 6;

twoSum(a, tar)