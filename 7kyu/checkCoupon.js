function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let currentDateObj = new Date(currentDate);
    let expirationDateObj = new Date(expirationDate);
    return enteredCode === correctCode && Date.parse(currentDateObj) <= Date.parse(expirationDateObj) 
}