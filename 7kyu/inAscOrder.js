function inAscOrder(arr) {
    let newArr = arr.map((element) => element)
    arr = arr.sort((a,b) => a - b)
    let total = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == newArr[i]) {
        total += 1
      }
    }
    return total == arr.length
}