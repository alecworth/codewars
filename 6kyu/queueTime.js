function queueTime(customers, n) {
    //create new array with n amount of spaces
    let newArr = new Array(n).fill(0);
    // loop through customers array
    for (let time of customers) {
      // taking the lowest number from array each time
      let idx = newArr.indexOf(Math.min(...newArr));
      // adding time to lowest number array ( ex: putting 6 into index 1 because it's the minimum value in newArr [10,2] )
      newArr[idx] += time;
    }
    //returning max value in array
    return Math.max(...newArr);
}