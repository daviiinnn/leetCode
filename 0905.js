/**
 * @param {number[]} A
 * @return {number[]}
 */
var b = [4,3,7,6,11,15,16]
var sorta = function(A) {
    var input = [];
    for(let i= 0; i< A.length; i++){
      if(A[i] % 2 === 0){
        input.unshift(A[i]);
      }else{
        input.push(A[i]);
      }
    }
    return input;
};