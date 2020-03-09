/**
 * @param {number} num
 * @return {number}
 */
var numb  = function(num) {
   var steps = 0;
   while(num > 0){
     if(num % 2 == 0){
       num /= 2;
       steps++;
     } else {
       num--;
       steps++;
     }
     if(num === 0){
       return steps;
     }
   };
};

var numb1  = function(num, steps = 0) {
  if (num === 0) return steps;
  return num % 2 ? numb(--num, ++steps) : numb(num / 2, ++steps);
};