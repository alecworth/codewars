function howMuchILoveYou(nbPetals) {
    //create new array with all the phrases in it
    let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    // access index that is nbPetals modulus the phrases.length (6)
    return phrases[(nbPetals - 1) % phrases.length] 
}
  