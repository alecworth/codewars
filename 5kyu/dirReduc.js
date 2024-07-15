function dirReduc(plan) {
    //create object that has directions with their opposites
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    //use the reduce method to create an empty array called dirs, dir is each element of the 'plan' array
    return plan.reduce(function(dirs, dir){
      // if the most recent element in dirs is opposite of the current element of the array, remove it
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
      // otherwise, push it to the array
        else
          dirs.push(dir);
      // return the dirs array
        return dirs;
      }, []);
}