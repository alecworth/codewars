function validatePIN (pin) {
    if (pin.length === 0) {
      return false
    }
    let newArr = pin.match(/[0-9]/g)
    if (pin.length === newArr.length) {
      return pin.length === 4 || pin.length === 6 
    } else {
      return false
    }
}