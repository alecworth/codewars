const capitals = function (word) {
    //set up a new array to put indices into
    let newArr = []
    //set up loop to iterate through string to check for capital letters using character code
      for (let i = 0; i < word.length; i++) {
      if(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
        // if it's upper case, push it to end of array
        newArr.push(i)
      }
    }
    //return the new array with indices
    return newArr
};