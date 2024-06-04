function clean_string(s) {
    // set up a new array for plugging in final string
    const result = []
    // loop through each character in string
      for (const c of s) {
      //if any elements are in the array, delete one off the end every time a "#" shows up
      if (c === "#") {
        result.pop()
        // if it's not a "#", push the letter to the new array
      } else {
        result.push(c)
      }
    }
    // convert back into string and return
    return result.join("")
}