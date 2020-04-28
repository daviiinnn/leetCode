happyNumber = (x) => {
  let n = x.toString().split("");

  multiplyArr = (it, ind, arr) => {
    arr[ind] = it ** 2;
  }
  n.forEach(multiplyArr);
  let c = n.reduce((a,b) => a + b, 0)
  
  return (c === 1 || c === 7) ? true 
  : (c < 10) ? false
  : happNumber(c);
}


happyNumber(101);
