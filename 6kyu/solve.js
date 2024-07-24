function solve(s) {
    // create new array to hold all charCode values
    let highest = []
    // split s by vowels
    let newArr = s.split(/[aeiou]/)
    // loop through newArr
    for (let i = 0; i < newArr.length; i++) {
    // push charCode value of each string to 'highest' array
      highest.push(newArr[i].split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0))
    }  
    // return highest value
    return Math.max(...highest)
}