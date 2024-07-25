function narcissistic(value) {
    // split number into array of nums (convert to string, split, map Number(element))
    let newArr = String(value).split('').map((element) => Number(element))
    let sum = 0
    // for loop that cycles through each digit
    for (let i = 0; i < newArr.length; i++) {
      sum += Math.pow(newArr[i], newArr.length)
    }
    // raise each digit to power that equals length of number
    // add to final sum and compare that to initial value
    return sum === value
}