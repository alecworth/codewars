/*
Parameters: m will always be an integer, no constraints 
Returns: Will always return either an integer (amount of cubes or -1)

Pseudo-code:

First, we will declare n and sumVolume at 0 
Second, we will set up a loop where we keep adding n^3 to sumVolume and checking if sumVolume === m
If it does equal m, then return n
If that condition is never met, then the loop ends when sumVolume is greater than m and return -1 
*/

function findNb(m) {
    let n = 0
    let sumVolume = 0
    for (n = 1; sumVolume < m; n++) {
      sumVolume += Math.pow(n, 3)
      if (sumVolume === m) {
        return n
      }
    }
    return -1
}