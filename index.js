var x = ["C", "D", "E", "F", "G"];
var y = [3, 0, 4, 1, 2];

sorti = (a, b) => {
  let res = {};

  for(let i = 0; i< b.length; i++){
    res[b[i]] = a[i];
  }

  return Object.values(res);
}