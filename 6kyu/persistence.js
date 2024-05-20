function persistence(num) {
    let strNum = String(num).split('').map((element) => Number(element))
    let sum = 0
     for (let i = 0; strNum.length > 1; i++) {
       strNum = strNum.reduce((a,b) => a * b)
       strNum = String(strNum).split('').map((element) => Number(element))
       sum += 1
     }
    return sum
}