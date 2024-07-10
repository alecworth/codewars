function feast(beast, dish) {
    //check if first and last char of each string equals the other
    return beast[0] == dish[0] && beast[beast.length-1] == dish[dish.length-1]
}