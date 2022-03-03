var reverseString = function(s) {
  let start = 0
  let end = s.length-1
  while(start < end) {
    const m = s[start]
    s[start] = s[end]
    s[end] = m
    start++
    end--
  }
  return s
};

s = ["h","e","l","l","o","a"]

console.log(reverseString(s))