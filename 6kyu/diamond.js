function diamond (n) {
    //validate whether n is above 0 or an odd number, if not it'll return null
    if (n <= 0 || n % 2 === 0) return null
    //declare str variable to hold final value
    str = ''
    
    //loop through n times
    for (let i = 0; i < n; i++) { 
      // take absolute value of 2 less than n and 1 less than i divided by 2 
      let len = Math.abs((n-2*i-1)/2)
      // repeat spaces len amount of times
      str += ' '.repeat(len) 
      // repeat asterisk n minus len * 2
      str += '*'.repeat(n-2*len) 
      // add \n at the end
      str += '\n'
    }
    
    return str
}