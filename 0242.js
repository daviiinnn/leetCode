/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const ress = s.split('').sort().join('');
  const rest = t.split('').sort().join('');

  return ress === rest ? true : false;
};
