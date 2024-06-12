function tribonacci(signature, n) {
    //validate to check n for zero, return empty array if so
    if (n === 0) {
      return [];
    }
    //check if n is less than 3, if so return copy with n length of array
    if (n < 3) {
      return signature.slice(0, n);
    }
    // create new copy of signature to add to
    let newArr = signature.slice();
    // loop n amount of times, starting at 3rd index, adding sum of last 3 indexes
    for (let i = 3; i < n; i++) {
      newArr.push(newArr[i - 1] + newArr[i - 2] + newArr[i - 3]);
    }
    //tribonacci achieved
    return newArr;
}