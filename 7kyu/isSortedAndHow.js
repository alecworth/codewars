function isSortedAndHow(array) {
    let ascArr = array.map((element) => element).sort((a,b) => a - b)
    let descArr = array.map((element) => element).sort((a,b) => b - a)
    if(array.toString() == ascArr.toString()){
      return "yes, ascending"
    } else if (array.toString() ==descArr.toString()){
      return "yes, descending"
    } else {
      return 'no'
    }
}