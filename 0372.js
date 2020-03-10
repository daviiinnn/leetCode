/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
//super power
var spow = function(a, b) {
  const m = 1337;
  var dig = 0;
  let bmod = 0;
  for(let i = 0; i< b.length; i++){
    bmod = (bmod * 10 + b[i])%1140;
  }
  if (bmod === 0) return 1;

  //power function
  const ppiw = (c,d) =>{
    if (d === 0) return 1;
    if (d === 1) return c;
    let res = d%2===0 ? ppiw((c*c) % m, d/2) : 
                        ppiw((c*c)% m, (d-1)/2) * c;
    return res % m;
  }

  if (a % m === 0) return 0;
  if (bmod === 0) return bmod += 1440;

  return ppiw(a % m, bmod)

};