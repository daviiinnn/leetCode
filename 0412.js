/**
 * @param {number} n
 * @return {string[]}
 */
var fiz = function(n) {
    let res = [];
    for(let i = 1; i<=n; i++){
      i%3 === 0 && i%5 === 0 ? res.push("FizzBuzz")
    : i%5 === 0 ? res.push("Buzz")
    : i%3 === 0 ? res.push("Fizz")
    : res.push(i.toString())
    };

    return res;
};