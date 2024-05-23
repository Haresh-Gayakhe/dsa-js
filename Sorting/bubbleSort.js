// Naive approach

// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length - 1 ; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//         console.log(arr)
//     }
// }

// Better approach

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log(arr)
//   }
// }

// optimized approach if the array is nearly sorted

function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false
      }
    }
    if(noSwap) break;
    console.log(arr);
  }
}

bubbleSort([9, 1, 2, 3, 4]);
