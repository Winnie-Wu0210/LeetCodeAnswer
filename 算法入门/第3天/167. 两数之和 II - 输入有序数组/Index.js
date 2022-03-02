var twoSum = function(numbers, target) {
  let index1 = 0, index2 = 0
  while(index1 < numbers.length) {
    index2 = index1+1
    while(index2 < numbers.length) {
      if(numbers[index1]+numbers[index2] == target) {
        return [index1+1,index2+1]
      }else {
        index2++
      }
    }
    index1++
  }
};

var numbers = [3,24,50,79,88,150,345], target = 200

console.log(twoSum(numbers, target))