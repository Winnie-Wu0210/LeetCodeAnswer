var sortedSquares = function(nums) {
    let left = 0, 
        right = nums.length - 1,
        doubleNums = []
    while(left <= right) {
        let doubleLeft = nums[left] * nums[left],
            doubleRight = nums[right] * nums[right]
        if(doubleLeft > doubleRight) {
            doubleNums.unshift(doubleLeft)
            left++
        }else {
            doubleNums.unshift(doubleRight)
            right--
        }
    }
    return doubleNums
};

var arr = 
[-4,-1,0,3,10]

console.log(sortedSquares(arr))