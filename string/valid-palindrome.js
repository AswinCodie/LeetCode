/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

let lower =s.toLowerCase().replace(/[^a-z0-9]/g, "")

let isPal=lower.split("").reverse().join("")

return isPal===lower
};