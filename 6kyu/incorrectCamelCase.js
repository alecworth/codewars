String.prototype.camelCase=function(){
    // create new array with split words
    let newArr = this.split(' ')
    // loop through each word
    for (let i = 0; i < newArr.length; i++) {
      //validate that newArr is a real array
      if (newArr[i]){
        //capitalize first letter of each word, add the rest of the word in lowercase
      newArr[i] = newArr[i][0].toUpperCase() + newArr[i].slice(1).toLowerCase()
      }
    }
    return newArr.join('')
}