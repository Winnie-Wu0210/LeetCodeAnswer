var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    while(start <= end) {
        if(nums[start] > target) {
            return start
        }
        if(nums[end] < target) {
            return end+1
        }
        let mid = parseInt(start + (end - start) / 2)
        if(target == nums[mid]) {
            return mid
        }
        if(target > nums[mid]) {
            start = mid + 1
        }else {
            end = mid - 1
        }
    }
};
console.log(searchInsert([1,3,5,6], 0))