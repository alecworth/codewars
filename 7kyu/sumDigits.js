function sumDigits(number) {
    return(eval(String(Math.abs(number)).split('').join('+')))
}