function digPow(n, p){
    // convert n into a string to be split into an array of nums
    let strN = String(n).split('').map((element) => Number(element))
    let sum = 0
    let pows = []
    // loop starting at p and going the length of strN to store exponents
    for (let i = p; i < p + strN.length; i++) {
      pows.push(i)
    }
    // loop through each element in array, raising each element to corresponding exponent and adding to sum
    for (let i = 0; i < strN.length; i++) {
      sum += Math.pow(strN[i], pows[i])
    }
    // check if sum divided by n equals a whole number, if so return that whole number, if not return -1
    if (Number.isInteger(sum / n)) {
      return sum / n
    } else {
      return -1
    }
}