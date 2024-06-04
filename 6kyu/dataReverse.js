function dataReverse(data) {
    //need to make new inner array every 8 indexes
    //create new array to hold reversed data
    let newArr = []
    //loop over elements in array, iterate by 8
    for (let i = 0; i < data.length; i += 8) {
      //add sliced elements to beginning of array, making sets of bytes reversed
      newArr.unshift(...data.slice(i, i + 8))
    }
    return newArr
}