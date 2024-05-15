function sumCubes(n){
    let arr = []
    for (let i = 1; i <= n; i++) {
      arr.push(i)
    }
    return arr.map((x) => Math.pow(x, 3)).reduce((a,b) => a + b)
}