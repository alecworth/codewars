function well(x){
    //create new array filtered to include only 'good'
    let newArr = x.slice(0).filter((element) => element == 'good')
    //check whether length is between 0 and 2
    if (newArr.length > 0 && newArr.length < 3) {
      return 'Publish!'
    //check whether length is greater than 2
    } else if (newArr.length > 2) {
      return 'I smell a series!'
    //if none of those true, return fail
    } else {
      return 'Fail!'
    }
}