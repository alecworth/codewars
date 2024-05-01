function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0) {
      return -1
    }
    let sortedA1 = [...a1].sort((a,b) => a.length - b.length)
    let sortedA2 = [...a2].sort((a,b) => a.length - b.length)
    let newArr = []
    newArr.push(Math.abs(sortedA1[0].length - sortedA2[sortedA2.length-1].length))
    newArr.push(Math.abs(sortedA1[sortedA1.length-1].length - sortedA2[0].length))
    return Math.max(...newArr)
}