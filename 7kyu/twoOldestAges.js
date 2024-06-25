function twoOldestAges(ages){
    // sort array in place lowest to highest
    ages.sort((a,b) => a - b)
    // return last two (highest) nums in an array
    return [ages[ages.length-2], ages[ages.length-1]]
}