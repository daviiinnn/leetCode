/**
 * @param {number} num
 * @return {number}
 */
var numb  = function(num, steps = 0) {
  if (num === 0) return steps;
  return num % 2 ? numb(--num, ++steps) : numb(num / 2, ++steps);
};