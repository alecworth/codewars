function titleCase(title, minorWords) {
    //validate title 
    if (title.length == 0) {
      return ''
    }
    // change title to lowercase and split it into an array by spaces
    let titleArr = title.toLowerCase().split(' ')
    // use ternary to validate minorWords, change to lowercase/split into array by spaces if truthy, otherwise wrap in array
    let minorWordsArr = minorWords ? minorWords.toLowerCase().split(' ') : [minorWords]
    // declare variable that will hold final string
    // use map to check if index is 0 or minorWords doesn't include word from titleArr, if so capitalize word 
    let finalString = titleArr.map((word, index) => {
      if (index === 0 || !minorWordsArr.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    // otherwise, return word as is
      } else {
        return word;
      }
    });
    return finalString.join(' ')
}