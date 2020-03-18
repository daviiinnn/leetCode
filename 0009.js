/**
 * @param {number} x
 * @return {boolean}
 */
var isp = function(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  if (x < 10) return true;

  const res = [];
  while(x != 0){
    res.push(x % 10)
    x = Math.floor(x / 10)
  }

  for (let i = 0; i < res.length; i++) {
    if (res[i] != res[res.length - i - 1]) return false
  }

  return true;
};
