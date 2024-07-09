function isRubyComing(list) {
    //iterate over each object and grab language from each object, check if it includes Ruby
    return list.map((element) => element.language).includes('Ruby')
}