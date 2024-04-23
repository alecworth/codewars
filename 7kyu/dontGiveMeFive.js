function dontGiveMeFive(start, end){
    let newArr = []
    for (let i = start; i <= end; i++) {
      if (i.toString().includes('5') === false) {
      newArr.push(i)
      }
    }
    return newArr.length
}