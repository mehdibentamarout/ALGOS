// 🐸
function findConsecutiveSums(arr, k) {
  // create an output
  const sums = [];
  console.log(arr, k);

  // loop the array
  for (let i = 0; i < arr.length; i++) {
    // create a consecutive sum array
    const consecNums = [];
    // and a rolling sum
    let sum = 0;
    // starting at i
    let j = i;
    // loop until the sum is less than k or we read off the end of arr
    while (sum <= k && j < arr.length - 1) {
      // if sum + j is still smaller, add it
      if (sum + arr[j] <= k) {
        sum += arr[j];
        consecNums.push(arr[j]);
        j++;

        // if sum is equal to k now, push
        if (sum === k) {
          sums.push([...consecNums]);
          // [3, 6, 7]
          // [3, 6, 7, 0]
        }
      } else {
        // if the next number is so large that the sum becomes larger than k, break
        break;
      }
    }
  }
  return sums;
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));
