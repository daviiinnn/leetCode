var k = 234;
var b = k.toString().split('').map((a)=> parseInt(a, 10));
var kali = b.reduce((a,b)=> a*b);
var kal = b.reduce((a,b)=> a+b);

/**
 * @param {number} n
 * @return {number}
 */
var subt = function(n) {
    const b = n.toString().split('').map((a)=> parseInt(a, 10));
    var multpl = b.reduce((a,b)=> a*b);
    var add = b.reduce((a,b)=> a+b);

    return multpl - add;
};