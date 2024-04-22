function smallEnough(a, limit){
    let newArr = a.filter((element) => element <= limit)
    if (newArr.length == a.length) {
      return true
    } else {
      return false
    }
}