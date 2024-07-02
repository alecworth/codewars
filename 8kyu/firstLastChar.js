function array(string) {
    let newStr = []
    if (string.split(',').length < 3) {
      return null
    }
    string = string.split(',')
    for (let i = 1; i < string.length - 1; i++) {
      newStr.push(string[i])
    }
    return newStr.join(' ')
}