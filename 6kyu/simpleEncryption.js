function encrypt(text, n) {
    //validate to check if text is null or empty, or if n is 0, return original text if so
    if (!text || n <= 0) return text; 
    //set up loop to decrement n by 1
    while (n--) {
      //set ans to empty string and add every other index of text to it
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      //do it again to cover every letter in string
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      //set text to equal ans each time
      text = ans;
    }
    //return whatever end result of text is
    return text;
  }
  
  function decrypt(encryptedText, n) {
    //validate to see if encryptedText is empty or null or if n is 0, return original text if so
    if (!encryptedText || n <= 0) return encryptedText;
    //make an array the length of ans to add to
    const ans = new Array(encryptedText.length);
    //set up loop to decrement n by 1 
    while (n--) {
      // declare j and set to zero to access indexes of encryptedText
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        // starting with 1 and setting every other index of ans to encryptedText index + 1
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        // starting with 0 and setting every other index of ans to encryptedText index + 1
        ans[i] = encryptedText[j++];
      }
      // joining everything in ans to encryptedText
      encryptedText = ans.join('');
    }
    return encryptedText;
}