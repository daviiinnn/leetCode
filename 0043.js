/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  var res = BigInt(num2) * BigInt(num1)

  return `${res}`
    
};

multiply("123456789","987654321");