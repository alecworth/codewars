function moveZeros(arr) {
    // create array that only contains zeros
    let arrOfZeros = arr.filter((element) => element === 0)
    // create array that filters out zeros
    let finalArr = arr.filter((element) => element !== 0)
    // loop however many times there are zeros in the array
    for (let i = 0 ; i < arrOfZeros.length; i++) {
      // each time, push zero to the final array 
      finalArr.push(0)
    }
     return finalArr
}