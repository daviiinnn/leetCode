/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
      let x = n.toString().split("");

  multiplyArr = (it, ind, arr) => {
    arr[ind] = it ** 2;
  }
  x.forEach(multiplyArr);
  let c = x.reduce((a,b) => a + b, 0)
  
  return (c === 1 || c === 7) ? true 
  : (c < 10) ? false
  : isHappy(c);
};