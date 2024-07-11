function digitalRoot(n) {
    //declare variable that holds string version of n
    let strN  = String(n)
    //create loop that keeps going until strN is a single digit long
    for (let i = 0; strN.length > 1; i++) {
    //split strN into array by each digit, then convert back into numbers and reduce to single number
    strN = strN.split('').map((element)=> Number(element)).reduce((a,b) => a + b)   
    //convert back into string
    strN = String(strN)
      }
    //return as a number
    return Number(strN)
}