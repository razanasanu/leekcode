/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  const ans = [];
  for (i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
  }
  for (i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
  }
 
  return ans;
};
