function addLength(str) {
    return str.split(' ').map((element) => element + ' ' + element.length)
}