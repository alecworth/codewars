const isAnagram = function(test, original) {
    if(test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')) {
      return true
    } else {
      return false
    }
};