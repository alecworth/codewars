function findOutlier(integers){
    //set up two arrays to hold evens and odds
    let oddArr = []
    let evenArr = []
    //loop through the integers array
    for (let i = 0; i < integers.length; i++) {
      //check whether it's even, if so push to evenArr
      if (integers[i] % 2 === 0){
      evenArr.push(integers[i]) 
      //if not even, push to oddArr
    } else {
      oddArr.push(integers[i])
      }
    }
    // if oddArr length is greater than evenArr length, return first element of evenArr
    // otherwise return first element of oddArr
    return oddArr.length > evenArr.length ? evenArr[0] : oddArr[0]
}