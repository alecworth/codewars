decodeMorse = function(morseCode){
    // create function to take each morse code letter and convert it to an english letter
    function decodeMorseLetter(letter) {
      return MORSE_CODE[letter];
    }
    // create function to take entire word and split it up by letters, decode each letter, then join
    function decodeMorseWord(word) {
      return word.split(' ').map(decodeMorseLetter).join('');
    }
    // trim blank space in the beginning or end of string, split by full words
    // then run decodeMorseWord which will convert each letter into morse code and join back into a word
    // join by spaces so there are spaces between words
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}