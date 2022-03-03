var reverseWords = function(s) {
  var reserve = function(arr, start, end) {
    let left = start
    let right = end
    while(left < right) {
      const m = arr[left]
      arr[left] = arr[right]
      arr[right] = m
      left++
      right--
    }
    return arr
  }
  let strToArr = s.split('')
  let spaceArr = [-1,strToArr.length]
  for(let i=0;i<strToArr.length;i++) {
    if(strToArr[i] === ' ') {
      spaceArr.splice(spaceArr.length-1,0,i)
    }
  }
  for(let i=0;i<spaceArr.length-1;i++) {
    strToArr = reserve(strToArr, spaceArr[i]+1, spaceArr[i+1]-1)
  }
  let arrToStr = strToArr.join('')
  return arrToStr
};

var s = "hello word"

console.log(reverseWords(s))