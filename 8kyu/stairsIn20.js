function stairsIn20(s){
    //iterate through each element of first array (which are arrays)
    //then reduce each nested array into one num, then reduce all those reduced arrays into one number
    //then return
    return s.map((element) => element.reduce((a,b) => a + b)).reduce((a,b) => a + b) * 20
}