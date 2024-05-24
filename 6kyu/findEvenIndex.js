function findEvenIndex(arr) {
    let left = 0
    let right = arr.reduce((a,b) => a + b, 0)
    for (let i = 0; i < arr.length; i++) {
      right -= arr[i]
      if (i > 0) {
        left += arr[i - 1]
      }
      if (left == right) {
        return i
      }
    } 
    return -1
}