var longestPalindrome=function(s){
    // validate whether s is a string or not
    if (!s) return 0;
    // loop backwards the length of s
    for (let c = s.length; c > 0; c--) {
      // loop forwards amount depending on what iteration of c you're on (c=0 would be just 1 time)
      for (let i = 0; i <= s.length - c; i++) {
        // makes substring from i to i + c to test
        var check = s.substring(i, i + c);
        // checks if original word equals reversed word 
        // if so return the length of the string when palindrome is true
        if (check === check.split("").reverse().join("")) return c;
      }
    }
}