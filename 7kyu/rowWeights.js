function rowWeights(array){
    // create two variables, team1 and team2 and set to zero to add weights to
      let team1 = 0
      let team2 = 0
      for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
          team1 += array[i]
        } else {
          team2 += array[i]
        }
      }
      let newArr = [team1, team2]
      return newArr
}