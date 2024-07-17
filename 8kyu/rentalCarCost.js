function rentalCarCost(d) {
    let result = d * 40
    if (d > 6) {
      return result - 50
    } else if (d > 2) {
      return result - 20
    }
    return result
}