function twoSum(numbers, target) {
    // create new empty array to push final values
    let newArr = []
      //create nested loop to add numbers in array to equal target
      for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
          // same indices can't be added up
          // add up other indices if it equals target then push indices to array
          if (j != i && numbers[j] + numbers[i] === target) {
            newArr.push(j, i)
          } 
        }
      }
    return newArr
}