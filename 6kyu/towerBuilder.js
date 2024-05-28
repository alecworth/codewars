function towerBuilder(nFloors) {
    //create new array to store tower
    let newArr = []
    //create variable for width of tower
    let width = 2 * nFloors - 1;
    //loop to create nFloors amount of floors
    for (let i = 0; i < nFloors; i++) {
      //set variable of calculation for number of asterisks on each floor depending on i
      let numAsterisks = 2 * i + 1
      //set variable of calculation for number of spaces on each side
      let numOfSpaces = (width - numAsterisks) / 2
      //set floor variable by adding the correct number of spaces on each side, as well as asterisks in the middle
      let floor = ' '.repeat(numOfSpaces) + '*'.repeat(numAsterisks) + ' '.repeat(numOfSpaces)
      //push each floor then start over the loop again
      newArr.push(floor)
    }
    return newArr
}