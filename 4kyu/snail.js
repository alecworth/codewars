snail = function(array) {
    //create to store final array
    let newArr = [];
    // while the array length is greater than 0 (or truthy)
    while (array.length) {
      //adding first nested array from array to newArr 
      newArr.push(...array.shift());
      //remove all last elements in nested arrays from array and add to newArr
      array.map(row => newArr.push(row.pop())); 
      //reversing array then reversing nested array in place
      array.reverse().map(row => row.reverse());
    }
    return newArr;
}