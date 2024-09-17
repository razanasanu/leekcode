/**
 * @param {number[]} nums
 * @return {number}
 */
    
var averageValue = function(nums) {
    let total = 0;
    let count = 0;
    for (let num of nums) {
        if (num % 3 === 0 && num % 2 === 0) {
            total += num;
            count++;
        }
    }
    return count > 0 ? Math.floor(total / count) : 0;
};


// Python:

// def averageValue(nums):
//     total = 0
//     count = 0
//     for num in nums:
//         if num % 3 == 0 and num % 2 == 0:
//             total += num
//             count += 1
//     return total // count if count > 0 else 0


