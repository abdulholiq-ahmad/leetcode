/**
 * @param {number[]} nums
 * @return {number}
 */

// With Set
const removeDuplicates = (nums) => {
    const unique = Array.from(new Set(nums));
    unique.forEach((num, i) => {
        nums[i] = num;
    });
    return unique.length;
}

// With binary search
const removeDuplicatesBinary = (nums) => {
  if (nums.length === 0) return 0;
  
  let k = 1

  for(let i = 1; i < nums.length; i++) {
    let left = 0, right = k - 1
    let found = false

    while(left <= right) {
      let mid = Math.floor((left - right) / 2)

      if(nums[mid] === nums[i]) {
        found = true
        break
      } else if (nums[mid] < nums[i]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    if(!found) {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}