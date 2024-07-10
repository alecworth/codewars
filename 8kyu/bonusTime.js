function bonusTime(salary, bonus) {
    //check if bonus is true, if so return salary multiplied by 10, else return salary
    return bonus ? `£${salary * 10}` : `£${salary}`
}