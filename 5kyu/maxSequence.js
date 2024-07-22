var maxSequence = function(arr){
    // setting min ans and sum to 0
    let min = 0, ans = 0, sum = 0;
    // start loop to iterate over arr
    for (let i = 0; i < arr.length; ++i) {
      //add each element to sum
      sum += arr[i];
      //set minimum to be the smaller of the two between sum and min
      min = Math.min(sum, min);
      //set ans to be the bigger between ans and sum - min
      ans = Math.max(ans, sum - min);
    }
    return ans;
}