function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // filter array to include only birds that don't include any of the elements in the geese array
    return birds.filter((element) => !geese.includes(element))
    // return an array containing all of the strings in the input array except those that match strings in geese
};