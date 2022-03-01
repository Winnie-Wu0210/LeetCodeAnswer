let arr = [true, true, false, false, false,]

var aaa = function(n) {
    let start = 1
    let end = n
    
    while(start <= end) {
        let mid = parseInt(start + (end - start)/2)
        return mid
        if(arr[mid]) {
            start = mid
        }else {
            end = mid
        }
    }
    return start
}

console.log(aaa(arr.length))