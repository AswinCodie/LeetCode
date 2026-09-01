/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 let i;
var searchInsert = function(nums, target) {
    for ( i =0; i<nums.length; i++){
        if(target ===nums[i]){
            return i
        }
    }
     if(target !==nums[i]){
          nums.push(target)
          nums.sort((a,b)=>a-b)
            return nums.indexOf(target)
        }
    
};