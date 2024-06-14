function comp(array1, array2){
    if (!array1 || !array2) {
      return false
    }
    array1.sort((a,b) => a - b) 
    array2.sort((a,b) => a - b)
    let sum = 0
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] * array1[i] == array2[i]) {
        sum++
      } 
    }
    if (sum === array1.length) {
      return true
    } else {
      return false
    }
}