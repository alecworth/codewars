function capitalize(s){
    let finalArr = []
    let evenArr = s.split('').map((element, index) => {
      return index % 2 === 0 ? element.toUpperCase() : element.toLowerCase()                
    }).join('')
    let oddArr = s.split('').map((element, index) => {
      return index % 2 === 0 ? element.toLowerCase() : element.toUpperCase()                
    }).join('')
    finalArr.push(evenArr)
    finalArr.push(oddArr)
    return finalArr
};