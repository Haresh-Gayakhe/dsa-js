function countDown(num) {
    // Base condition to stop recursion
  if (num <= 0) {
    console.log("All done!");
    // Stop recursion
    return;
  }
  console.log(num);
  num--;
  // Recursion call
  countDown(num);
}

countDown(10);
