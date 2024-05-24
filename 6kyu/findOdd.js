function findOdd(A) {
    var countOccurencesOfInt = 0;
    for (let i = 0; i < A.length; i++) {
        var currentIterationInt = A[i];
        for (let j = 0; j < A.length; j++) {
            if (currentIterationInt == A[j]) {
                countOccurencesOfInt++;
            }
        }
        if (countOccurencesOfInt % 2 != 0) {
            return currentIterationInt;
        }
    }
}