function bubbleSort(nums) {
  let isSorted = false; // flag to check if things are sorted or not.

  while (isSorted === false) {
    // we want to run the bubble sorting as long as our flag says the array is not yet sorted
    isSorted = true; // we'll flip the flag to true, as default

    for (let i = 0; i < nums.length - 1; i++) {
      // length - 1 bc we set j to i+1
      const j = i + 1; // check value at the current index with the value at the next index

      if (nums[i] > nums[j]) {
        // if the current index's value is ( > ) greater than the next value
        isSorted = false; // flip the flag
        // swap
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  console.log(nums);
  return nums; // by this time it's sorted
}
bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
