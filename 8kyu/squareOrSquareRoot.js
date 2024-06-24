function squareOrSquareRoot(array) {
    //use map to iterate over array and check if square root is a whole num, if so return that num
    return array.map((element) => {
      if (Number.isInteger(Math.sqrt(element))) {
        return Math.sqrt(element)
    //otherwise return that num squared
      } else {
        return element*element
      }
    })
  }