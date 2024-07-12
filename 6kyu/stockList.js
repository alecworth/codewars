function stockList(listOfArt, listOfCat) {
    //set up obj to contain final values
    let obj = {};
    //validate that listOfArt is greater than 0, return '' if not
    if (!listOfArt.length) return '';
    //go through each element in array 
    listOfArt.forEach(function(art) {
     //set up new variable to contain first letter of each element
      let cat = art[0];
      //create new property in obj that are first letters of each element, add num to that obj
      obj[cat] = (obj[cat] | 0) + +art.split(' ')[1];
    });
    // return string from listOfCat array, return first letter, if it doesn't match return 0
    return listOfCat.map(function(c) {
      return `(${c} : ${obj[c] | 0})` 
      // join elements by ' - '
    }).join(' - ');  
}