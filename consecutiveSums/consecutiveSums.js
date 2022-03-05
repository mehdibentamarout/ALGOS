// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) {
  let result = 0;
  let temp_sum = 0;
  for (var i = 0; i < k - 1; i++) {
    temp_sum += arr[i];
  }
  for (var i = k - 1; i < arr.length; i++) {
    result += arr[i];
    if (temp_sum > result) {
      result = temp_sum;
    }
    temp_sum -= arr[i - k + 1];
  }
  return result;
}
