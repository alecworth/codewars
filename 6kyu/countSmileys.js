function countSmileys(arr) {
    let validSmileys =  [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"]
    let sum = 0
    for (let i = 0; i <= arr.length; i++) {
      if (validSmileys.includes(arr[i])) {
        sum++
      }
    }
    return sum
}