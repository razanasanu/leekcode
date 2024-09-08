/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    for (let multiple = n; ; multiple += n) {
        if (multiple % 2 === 0) {
            return multiple;
        }
    }
};
