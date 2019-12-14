function getTotalX(a, b) {
  // Write your code here
  let count = 0;
  let maximumValOfA = Math.max(...a);
  let minimumValOfB = Math.min(...b);
  let number = maximumValOfA;
  // Find the multiple in the first array
  let isMultiple = false;
  let isMultipleOfAll = false;

  while (number <= minimumValOfB) {
    // Every element of array  must be a multiple of considerd number
    isMultiple = a.every(ele => number % ele === 0);
    isMultipleOfAll = b.every(ele => ele % number === 0);
    if (isMultiple && isMultipleOfAll) count++;
    number++;
  }

  return count;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
