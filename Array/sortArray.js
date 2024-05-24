function comparator(num1, num2) {
    return num1 - num2 // to sort asc
    // return num2 -num1 // to sort desc
}

let arr = [100, 657, 50, 23, 45, 7, 1, 345, 3]

// we pass comparator function to sort the array
console.log(arr.sort(comparator))