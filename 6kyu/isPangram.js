function isPangram(string){
    //convert string into lowercase 
    string = string.toLowerCase();
    //set every letter of the alphabet to array, check if string contains every letter using the every method
    return "abcdefghijklmnopqrstuvwxyz".split("").every((x) => {
      // checking for a non -1 index, because in this case, we want -1 to return false
      return string.indexOf(x) !== -1;
    });
}