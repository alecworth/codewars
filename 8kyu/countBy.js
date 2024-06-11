function countBy(x, n) {
    // set up array to output looped values into
    let z = [];
    // set up loop starting at 1 and ending at n
    for (let i = 1; i <= n; i++) {
      // add i * x to end of array
      z.push(i * x)
    }
    return z;
}