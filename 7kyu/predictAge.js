function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    return Math.floor(Math.sqrt(Math.pow(age1, 2) + Math.pow(age2, 2) + Math.pow(age3, 2) + Math.pow(age4, 2) + Math.pow(age5, 2) + Math.pow(age6, 2) + Math.pow(age7, 2) + Math.pow(age8, 2)) / 2)
}