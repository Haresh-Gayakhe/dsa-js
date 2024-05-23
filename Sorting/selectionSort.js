function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // set first index as minimum value
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      // check if there is minimum value than min
      if (arr[min] > arr[j]) {
        // change min index
        min = j;
      }
    }
    // if new minimum value found swap it with previous min
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  console.log(arr);
}

selectionSort([34, 22, 10, 19, 17]);
