function toCamelCase(str){
    // use regex to split string by both hyphens and underscores
    let newArr = str.split(/[-_]/)
    // map through the array and return first word unedited
    return newArr.map((element, index)=> {
      if(index === 0) {
        return element
      }
      // then return second word with first letter capitalized, then rest of word sliced in
      if(index != 0) {
        return element[0].toUpperCase() + element.slice(1)
      }
    }).join('')
    return newArr
}