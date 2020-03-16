{/* 
  We have an array of objects A and an array of indexes B.
  Reorder objects in array A with given indexes in array B.
  Do not change array A's length.

  Example:
  var A = [C, D, E, F, G]
  var B = [3, 0, 4, 1, 2]

  sort(A, B)
  A is now [D, F, G, C, E]
*/}


var x = ["C", "D", "E", "F", "G"];
var y = [3, 0, 4, 1, 2];

sorti = (a, b) => {
  let res = {};

  for(let i = 0; i< b.length; i++){
    res[b[i]] = a[i];
  }

  return Object.values(res);
}