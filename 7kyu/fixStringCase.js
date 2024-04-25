function solve(s){
    // do a loop that compares each letter of word
    // to lowercase and uppercase versions of that word 
      let upperCaseSum = 0
      let lowerCaseSum = 0
      for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i].toUpperCase()) {
          upperCaseSum += 1
        } else {
          lowerCaseSum += 1
        }
      }
      if (lowerCaseSum >= upperCaseSum) {
        return s.toLowerCase()
      } else {
        return s.toUpperCase()
      }
}