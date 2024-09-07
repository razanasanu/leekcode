/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
  let p = 0, bc = 0;
  for (let n of nums) {
    p += n;
    bc += p === 0;
  }
  return bc;
};
