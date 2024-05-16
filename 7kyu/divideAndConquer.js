function divCon(x){
    let stringArr = x.filter((x) => typeof x === 'string').map((x) => Number(x)).reduce((a,b) => a+b,0)
    let numArr = x.filter((x) => typeof x === 'number').reduce((a,b) => a+b,0)
    return numArr - stringArr
}