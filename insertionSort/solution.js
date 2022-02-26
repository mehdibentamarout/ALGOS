function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // save the current 'target' so this space is available to use for shifting
    let numToInsert = arr[i];
    let leftIdx = i - 1;

    while (leftIdx >= 0 && arr[leftIdx] > numToInsert) {
      // shift to the right because it's greater than the item we are going to insert
      arr[leftIdx + 1] = arr[leftIdx];
      leftIdx--;
    }
    // shifting complete, insert position located
    arr[leftIdx + 1] = numToInsert;
  }
  return arr;
}

//////////////////////////////////////////////////////////////////////////////////////
function insertionSort2(arr) {
  for (var x = 1; x < arr.length; x++) {
    let temp = arr[x];
    // console.log("X: ", x)
    for (var y = x - 1; y >= 0; y--) {
      if (arr[y] > temp) {
        arr[y + 1] = arr[y];
        if (y == 0) {
          arr[y] = temp;
          // break;
        }
      } else {
        // console.log("else at y:", y)
        arr[y + 1] = temp;
        break; //because everything else on the left is already pre-sorted
        // once we put the temp in we have to break out of its loop; otherwise it will continue
      }
    }
  }
  console.log(arr);
}

insertionSort2([3, 5, 2, 1, 0]);
insertionSort2([3, 0]);
insertionSort2([0]);
insertionSort2([]);
insertionSort2([1, 2, 3, 4, 5]);
insertionSort2([5, 4, 3, 2, 1]);
insertionSort2([5, 4, 0, 2, 1]);
