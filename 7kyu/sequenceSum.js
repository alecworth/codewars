const sequenceSum = (begin, end, step) => {
    //set up sum variable at 0 
    let sum = 0
    //set up loop to add each number to sum
    for (let i = begin; i <= end; i += step) {
      sum += i
    }
    //return the final sum
    return sum
};