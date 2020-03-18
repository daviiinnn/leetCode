/**
 * @param {string} s
 * @return {number}
 */
var romao = function(s) {
  const roman = { 'I':1,                       
                  'V':5,
                  'X':10,
                  'L':50,
                  'C':100,
                  'D':500,
                  'M':1000 };
  var res = 0;

  for(let i = 0; i< s.length; i++){
    roman[s[i]] < roman[s[i + 1]] ? res -= roman[s[i]]
    : res += roman[s[i]];
  }
    return res;
};