function arrayPlusArray(arr1, arr2) {
    //merge arrays together, then use reduce method to add them altogether
    return arr1.concat(arr2).reduce((a,b) => a + b)
}