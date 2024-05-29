function deleteNth(arr,x) {
    // create new object to store number of occurrences of number in array
    let newObj = {};
    // filter the original arr, plugging in each number in array to the object and adding number of occurrences
    return arr.filter((n) => {
      //let each number in array equal amount of times or zero and add 1 if it hasn't occurred yet
      newObj[n] = (newObj[n]||0) + 1;
      // if the number has occurred less than or equal to x times, add it into the array
      return newObj[n] <= x;
    });
}