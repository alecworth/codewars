function roundToNext5(n){
    // create while loop that checks if the number isn't divisible by 5
    while (n % 5 !== 0) {
    // as long as it isn't divisible by 5, keep adding 1 to n
      n++
    }
    //return n, as it will equal the next multiple of 5
    return n
}