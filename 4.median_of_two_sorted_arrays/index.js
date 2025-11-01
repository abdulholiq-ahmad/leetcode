function findMedianSortedArrays(nums1, nums2) {
  const merge = nums1.concat(nums2).sort((a, b) => a - b)
  const length = merge.length

  if (length % 2 === 1) {
    return merge[Math.floor(length / 2)]
  } else {
    return (merge[length / 2 - 1] + merge[length / 2]) / 2
  }
};

console.log(findMedianSortedArrays([1, 3], [2]))