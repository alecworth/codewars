function meeting(s) {
    //start new array split by ';'
    let newArr = s.split(';')
    //take each element in array
    //add parenthesis to front and back
    //make each element upper case
    //split each name into new arrays then reverse names in arrays
    //join by comma and space
    //sort last names in aplhabetical order
    //join to match format
    return newArr.map((e) => '(' + e.toUpperCase()
                                    .split(':')
                                    .reverse()
                                    .join(', ') 
                                    + ')')
                                    .sort()
                                    .join('')
}