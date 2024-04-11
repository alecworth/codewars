function SeriesSum(n) {
    let numerator = 1
    let denom = 1
    let total = 0 
    // set numerator to 1 & denom to 1
    // add 3 to denom for each new iteration
    // divide
    for (let i = 0; i < n; i++) {
      total += numerator / denom
      denom += 3
    }
    return total.toFixed(2)
}