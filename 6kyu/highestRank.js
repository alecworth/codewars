function highestRank(arr){
    //create new object to store key values 
    let newObj = {};
    //iterate through loop and check if each element is undefined, set to 0 if so
    arr.forEach(function(elem){
       if(newObj[elem] === undefined)
         newObj[elem] = 0;
      //if already defined, add 1 to that key
       newObj[elem]++;
    });
    // make a new object with the keys of newObj, along with setting the highest number to 0 and key to undefined
    let keys = Object.keys(newObj)
    let highest = 0 
    let key
    //iterate over each element in keys and check if value of key is higher than highest, if so set highest to that key
    keys.forEach(function(elem){
       if(newObj[elem] >= highest)
       {
          highest = newObj[elem];
          key = elem;
       }
    })
    return parseInt(key);
}