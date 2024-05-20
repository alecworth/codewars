function order(words){
    let arr = words.split(' ')
    let sortedArr = []
  
    for (let i = 0; i <= arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].indexOf(i) >= 0) {
          sortedArr.push(arr[j])
        }
      }
    }
    return sortedArr.join(' ')
}