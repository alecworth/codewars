var findAverage = function (nums) {
    //add all nums together and divide them by length of array
    return nums.reduce((a,b) => a + b)/nums.length
}