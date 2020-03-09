/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var lol = 0;
    if(x < 0){
      lol = Math.abs(x).toString().split("").reverse().join("") * -1;
    }else{
      lol = x.toString().split("").reverse().join("");
    }
    if(lol < -2147483648 || lol > 2147483648){
      return 0;
    }
    return lol;
};