/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false

    const frqS={}
    const frqT={}

    for(let chars of s){
        frqS[chars]=(frqS[chars] || 0)+1;
    }
    for(let chars of t){
        frqT[chars]=(frqT[chars] || 0)+1;
    }

    for(let char in frqS){
        if(frqS[char]!== frqT[char]){
            return false
        }
    }


return true
};