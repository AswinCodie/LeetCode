/**
 * @param {number} x
 * @return {boolean}
 */
 var x=121;
var isPalindrome = function(x) {
let newX= x.toString().split('').reverse().join('')
return x.toString()==newX;
};
