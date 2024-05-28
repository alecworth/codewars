function solution(string) {
    //create new empty string
    let result = ''
    //iterate over each index (except for first) in string to check for capital letters
    for(let i = 0; i < string.length; i++) {
      if (string[i] == string[i].toUpperCase() && i != 0) {
        //if capital, then add a space before adding the letter to the empty string
        result += ' '
      }
      //adding letter to empty string
      result += string[i]
    } 
    //returning final string with spaces added before capitalized words
    return result
}