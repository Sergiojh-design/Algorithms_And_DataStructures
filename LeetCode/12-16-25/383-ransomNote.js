/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let charHash = {};

    for(let c of magazine){
        !charHash[c] ? charHash[c] = 1 : charHash[c] += 1;
    }

    for(let c of ransomNote){
        if(!charHash[c] || charHash[c] <= 0) {
            return false;
        }
        charHash[c]--;
    }

    return true;
};