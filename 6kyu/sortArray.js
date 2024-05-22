function sortArray(arr) {

    let oddNums = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);

    let oddIndex = 0;

    const result = arr.map(num => {
        if (num % 2 !== 0) {
            return oddNums[oddIndex++];
        }
        return num;
    });
    
    return result;
}