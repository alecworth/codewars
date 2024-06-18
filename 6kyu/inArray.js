function inArray(array1,array2){
    //create new array to hold matching substrings
    let newArr = []
    //create nested loop to compare strings and substrings
    for (let i = 0; i < array2.length; i++) {
      for (let j = 0; j < array1.length; j++) {
        //conditional to check if substring is in string and if that substring isn't already in newArr
        if (array2[i].includes(array1[j]) && !newArr.includes(array1[j])) {
          newArr.push(array1[j])
        }
      }
    }
    return newArr.sort()
}