function gimme (triplet) {
    let newArr = triplet.slice()
    triplet.sort((a,b) => a-b)
    return newArr.indexOf(triplet[1])
}