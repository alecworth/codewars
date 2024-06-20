function divisibleBy(numbers, divisor){
    return numbers.filter((element) => element % divisor === 0)
}