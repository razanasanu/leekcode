/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const removeDuplicates=nums.sort((a,b)=>a-b);
    for(let i=0;i<=nums.length;i++){
        for(let j=i+1;j<=nums.length;j++){
        
   if   (nums[i]===nums[j]){
     nums.splice(j,1)
     j--
   }

}

}

};