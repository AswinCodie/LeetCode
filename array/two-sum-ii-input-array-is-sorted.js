/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    const result =[]
    for(i=0;i<numbers.length;i++){
        let leftover= target-numbers[i];

     for(j=i+1;j<numbers.length;j++){
         if(numbers[j]===leftover){
        result.push(i+1,j+1)
       }
 
     } 
       
    }
    return result

};