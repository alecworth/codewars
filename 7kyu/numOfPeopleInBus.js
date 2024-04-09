var number = function(busStops){
    return busStops.reduce((acc, element) => acc + element[0] - element[1], 0)
}