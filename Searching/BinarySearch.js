function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  // Code will run until we found element or left is less than or equal to right
  while (arr[middle] != value && left <= right) {
    if (value < arr[middle]) {
      // If element is less than the middle
      right = middle - 1;
    } else {
      // If element is greater than the middle
      left = middle + 1;
    }

    // Calculate middle after every step
    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] == value ? middle : -1;
}

console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 15));
