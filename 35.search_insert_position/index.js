/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let lower = 0
  let upper = nums.length - 1

  if(nums[upper] < target) {
    return upper + 1
  }

  if(nums[lower] > target) {
    return lower
  }

  while(lower <= upper) {
    const middle = lower + Math.floor((upper - lower) / 2)

    if(target === nums[middle]) {
      return middle
    }

    if(target < nums[middle] && target > nums[middle - 1] ) {
      return middle
    }

    if(target < nums[middle]) {
      upper = middle - 1
    } else {
      lower = middle + 1
    }
  }
};