multiplicationTable = function(size) {
    //create new array to store nums
    let newArr = []
    //loop and add vals
    for (let i = 0; i < size; i++) {
      //create inner array 'size' number of times
      newArr.push([])
      //new loop for inner array to place vals into
      for (let j = 0; j < size; j++) {
        //math equation to get vals into inner newArr
        newArr[i].push((i + 1) * (j + 1) )
      }
    }
    return newArr
}