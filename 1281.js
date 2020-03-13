/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const b = n.toString().split('').map((a)=> parseInt(a, 10));
    var multpl = b.reduce((a,b)=> a*b);
    var add = b.reduce((a,b)=> a+b);

    return multpl - add;
};