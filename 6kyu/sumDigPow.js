function sumDigPow(a, b) {
    // create new arr to hold eureka values
    let arr = [];
    // run loop starting at a and ending when i is less than or equal to b
    for (let i = a; i <= b; i++) {
      // create sum variable to check if num is a eureka value
      let sum = 0;
      // run nested loop to iterate through each digit in number
      for (var j = 0; j < String(i).length; j++) {
        // add each number raised to j power + 1 to sum
        sum += Math.pow(parseInt(String(i)[j]), j+1);  
        // push num to array if sum equals original number (Eureka!)
        if (sum == i) arr.push(i);
      }
    }
    return arr;
}