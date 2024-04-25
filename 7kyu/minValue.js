function minValue(values){
    // get rid of duplicates, add all nums together in a string, and convert back to a num
    let newArr = [...new Set(values)]
    return Number(newArr.sort((a,b) => a - b).join(''))
}