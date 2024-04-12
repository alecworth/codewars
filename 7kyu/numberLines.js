var number=function(array){
    let newArr = []
    if (array.length == 0) {
      return []
    }
    for (let i = 0; i < array.length ; i++) {
      newArr.push(i+1 + ': ' + array[i])
    }
    return newArr
}