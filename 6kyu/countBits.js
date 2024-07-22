var countBits = function(n) {
    // convert number into base 2 
    // then split into array by character
    // then reduce into final value while converting each element into a number
    return n.toString(2).split('').reduce((a,b) => Number(a) + Number(b), 0)
};