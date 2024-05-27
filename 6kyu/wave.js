function wave(str){
    let newArr = []
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
      newArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1))
      }
    }
    return newArr
}