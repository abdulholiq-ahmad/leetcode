var singleNumber = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    let count = 0
    for(let j = 0; j < nums.length; j++) {
      if(nums[i] === nums[j]) {
        count++
      }
    }
    if(count === 1) return nums[i]
  }
  return -1
};

// XOR
function singleNumber(nums) {
  let result = 0;
  
  for (const num of nums) {
    result ^= num;
  }
  
  return result;
}
