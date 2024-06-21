function mergeArrays(arr1, arr2) {
    //create new Set to filter out duplicates and sort as normal
    return [...new Set(arr1.concat(arr2).sort((a,b) => a - b))] 
}