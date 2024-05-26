function insertionSort(arr) {
  // start from second element
  for (let i = 1; i < arr.length; i++) {
    // store current value
    let currentVal = arr[i];
    let j;
    // compare and swap previous element until it is greater than current value
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }

    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
