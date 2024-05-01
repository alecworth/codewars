function factorial(n){
    let arr = []
    if (n === 0) {
      return 1
    } else {
      for (let i = 1; i <= n; i++) {
      arr.push(i)
      
    }
      return arr.reduce((a,b) => a * b)
    }
    
}