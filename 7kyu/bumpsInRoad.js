function bump(x){
    let numOfBumps = x.split('').filter((element) => element === 'n').length
  
    if (numOfBumps <= 15) {
      return "Woohoo!"
    } else {
      return 'Car Dead'
    }
}