function expandedForm(num) {
    //turn number into string then into array to iterate through
    let strNum = String(num).split('')
    //create new array to store values that will be in the final return
    let newArr = []
    //iterate over each character in string to add to new array
    for (let i = 0; i < strNum.length; i++) {
      // only push numbers that aren't zero
      if(strNum[i] !== '0'){
      // push number followed by amount of zeros equal to length left of strNum
      newArr.push(strNum[i] + '0'.repeat(strNum.length - 1 - i), '+')
      }
    }
    //remove extra plus at the end
    newArr.pop()
    return newArr.join(' ')
}