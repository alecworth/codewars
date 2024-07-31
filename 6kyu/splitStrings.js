function solution(str){
    //create newArr to hold final values
    let newArr = []
    //create strArr to split str into arr by characters
    let strArr = str.split('')
    //loop through every 2 indices, pushing that index plus the next one by concatenating them
    for (let i = 0; i < str.length; i+=2) {
      newArr.push(strArr[i] + strArr[i+1])
    }
    //if there's an odd length, remove the last index and replace it with letter followed by underscore
    if (str.length % 2 == 1) { 
        newArr.pop()
        newArr.push(str[str.length-1] + '_')
     }
    return newArr
}