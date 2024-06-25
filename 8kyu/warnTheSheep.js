function warnTheSheep(queue) {
    //check whether wolf is at end of array
    if (queue.indexOf('wolf') == queue.length - 1) {
      return 'Pls go away and stop eating my sheep'
    //otherwise, return length of array minus 1 minus the index that the wolf is at 
    } else {
      return `Oi! Sheep number ${queue.length - 1 - queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
    }
}