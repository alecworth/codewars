const flip=(d, a)=>{
    //if the direction is right, sort array from least to greatest and return
    if (d === 'R') {
      return a.sort((a, b) => a - b)
    //if the direction is not right, sort array from greatest to least and return
    } else {
      return a.sort((a, b) => b - a)
    }
}