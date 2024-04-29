function sumOfMinimums(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(Math.min(...arr[i]))
    }
    return newArr.reduce((a,b) => a + b)
}