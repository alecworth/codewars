function firstNonConsecutive (arr) {
    // create for loop to iterate through array 
    for (let i = 0; i < arr.length-1; i++) {
      // conditional to check whether the next index doesn't equal the current index + 1
      if (arr[i] + 1 !== arr[i+1]) {
        // return that next index if so
        return arr[i+1]
      } 
    }
    // if none of the indexes pass that conditional, return null
    return null
}