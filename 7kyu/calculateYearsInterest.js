function calculateYears(principal, interest, tax, desired) {
    let y = 0
      while(principal < desired) {
        y++;
        principal = principal + (principal * interest) - (principal * interest * tax)
    }
    return y
}