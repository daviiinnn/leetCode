/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return x ** n;
};

var myPow1 = (x,n) =>{
  if (n === 0) return 1;
  let p = Math.abs(n);
  let res = p%2===0 ? myPow1(x*x, p/2) : myPow1(x*x, (p-1)/2) *x;

  return res > 0 ? res : 1/res;


}