function alphabetWar(fight) {
    let rightSide = 0
    let leftSide = 0
    let fightArr = fight.split('')
    for (let i = 0; i < fightArr.length; i++) {
        if (fightArr[i] == 'w') {
          leftSide += 4
        } else if (fightArr[i] == 'p') {
          leftSide += 3
        } else if (fightArr[i] == 'b') {
          leftSide += 2
        } else if (fightArr[i] == 's') {
          leftSide += 1
        } else if (fightArr[i] == 'm') {
          rightSide += 4
        } else if (fightArr[i] == 'q') {
          rightSide += 3
        } else if (fightArr[i] == 'd') {
          rightSide += 2
        } else if (fightArr[i] == 'z') {
          rightSide += 1
        }
    }
    if (leftSide > rightSide) {
      return "Left side wins!"
    } else if (rightSide > leftSide) {
      return "Right side wins!"
    } else {
      return "Let's fight again!";
    }
}