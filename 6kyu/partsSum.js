function partsSums(ls) {
    // add zero to beginning of array so that initial value can be on final array
    ls.unshift(0);
    // let sum equal the sum of all the values in the array
    let sum = ls.reduce((a, b) => a + b, 0);
    // return an array with the sum subtracted by each element, changing the value of the sum every time
    return ls.map(v => sum = sum - v);
}