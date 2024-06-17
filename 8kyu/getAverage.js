function getAverage(marks){
    // return rounded down number of the sum of the array divided by the length of the array
    return Math.floor(marks.reduce((a,b) => a + b) / marks.length)
}