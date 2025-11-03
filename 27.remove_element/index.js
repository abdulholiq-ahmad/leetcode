var removeElement = function(nums, val) {
  if(nums.length === 0) retur

  let sortedArray = nums.sort((a, b) => a - b)
  let i = 0
  while(i < sortedArray.length) {
    if(sortedArray[i] === val) {
      sortedArray.splice(i, 1)
    } else {
      ++i
    }
  }
  return i
};