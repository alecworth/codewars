function findNextSquare(sq) {
    let squareRoot = Math.sqrt(sq)
    if (Number.isInteger(squareRoot)) {
      return (squareRoot + 1) * (squareRoot + 1)
    } else {
      return -1
    }
}