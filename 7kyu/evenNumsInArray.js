function evenNumbers(array, number) {
    let newArr = array.filter((x) => x % 2 === 0) 
    return newArr.slice(newArr.length - number)
}

