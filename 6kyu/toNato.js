function toNato(words) {
    // split words into array of letters
    let wordsArr = words.replaceAll(' ', '').split('')
    // create array to plug in NATO versions of letters
    let newArr = []
    // loop through each letter, pushing each NATO letter to array if it's not punctuation
    for (let i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i] != ',' && wordsArr[i] != '.' && wordsArr[i] != '!' && wordsArr[i] != '?'&& wordsArr[i] != ' ') {
         newArr.push(NATO[wordsArr[i].toUpperCase()])
      } 
      // if it is punctuation, just push it as it is to the array
        else {
        newArr.push(wordsArr[i])
      }
    }
    // return final string joined by spaces
    return newArr.join(' ')
}