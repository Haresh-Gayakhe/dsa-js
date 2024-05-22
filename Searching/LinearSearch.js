const linearSearch = (arr, value) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === value) {
      // return the index of element
      return index;
    }
  }
  // return -1 if element not found
  return -1;
};

console.log(linearSearch([15, 3, 6, 2, 100, 32, 98], 2));
