/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = {};
    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [str];
        } else {
            anagrams[sortedStr].push(str);
        
    }
    }
    return Object.values(anagrams);
}

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));


    
