/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

let set = new Set()
let i , j=0;

  for(i=0; i<nums.length;i++){

        if(set.has(nums[i])){
            return true
        }

        set.add(nums[i])

  }
return false;
};