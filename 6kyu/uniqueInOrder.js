var uniqueInOrder=function(iterable){
    let newArr 
    let newerArr = []
    if (typeof iterable === "string") {
      newArr = iterable.split('')
    } else {
      newArr = iterable
    }
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] !== newArr[i+1]) {
        newerArr.push(newArr[i])
      } 
    }
    return newerArr
}