function reverse(str){
    //split string into arrays separated by spaces
    let newArr = str.split(' ')
    //loop through array
    for (let i = 0; i < newArr.length; i++) {
      //if index is odd, assign index of array to reversed version of string
      if (i % 2 !== 0) {
        newArr[i] = newArr[i].split('').reverse().join('')
      }
    }
    //join strings together by spaces, and trim any whitespace
    return newArr.join(' ').trim()
}