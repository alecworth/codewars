function findMissingLetter(array){
    let convertedArr = array.map((element) => element.charCodeAt(0))
    for (let i = 0; i < array.length; i++) {
      if (convertedArr[i] + 1 !== convertedArr[i + 1]) {
        return String.fromCharCode(convertedArr[i] + 1)
      }
    }
}