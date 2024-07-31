function race(v1, v2, g) {
    if (v1 <= 0 || v2 <= 0 || g < 0 || v1 >= v2) {
      return null
    }
    let sum = g / (v2 - v1)
    let hours = Math.trunc(sum)
    let mins = Math.trunc((sum * 60) - (hours * 60))
    let secs = Math.trunc(((sum * 60) - mins - (hours * 60)) * 60)
    return [hours, mins, secs]
}