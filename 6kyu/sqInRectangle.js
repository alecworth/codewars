function sqInRect(lng, wdth){
    // create new array to store final values 
    let arr = []
    // check if lng === wdth, return null if so
    if(lng === wdth) return null
    // run while loop as long as lng and wdth are greater than 0
    while(lng > 0 && wdth > 0){
      // push wdth if lng is greater, lng is lng is less than
      arr.push(lng > wdth ? wdth : lng)
      // also, subtract wdth from lng if lng is greater, subtract lng from wdth if wdth is greater
      lng > wdth ? lng -= wdth : wdth -= lng
    }
    return arr
}