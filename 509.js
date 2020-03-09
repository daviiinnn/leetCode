/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let f = [0, 1];
    for(let i=2; i<=N; i++){
      f.push(f[i-1] + f[i-2]);
    }
  return f[N];
};