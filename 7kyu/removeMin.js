function removeSmallest(numbers) {
    if (numbers.length == 0) {
      return []
    } 
    let noIndex = numbers.indexOf(Math.min(...numbers))
    return numbers.filter((element, index) => index !== noIndex) 
}