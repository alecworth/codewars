function maxMultiple(divisor, bound){
    let ans = 0
    for (let i = 0; i <= bound; i++) {
      if (i % divisor == 0) {
        ans = i
      }
    }
    return ans
}