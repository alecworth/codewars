function isVow(a){
    let vowels = ['a','e','i','o','u'].map(vowel => vowel.charCodeAt(0));
     return a.map((element) => {
       if(vowels.includes(element)) {
         return String.fromCharCode(element)
       } else {
          return element
        }
     })
    return a
}