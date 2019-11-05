// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let sorted = Array.from(arr);
  sorted.sort((a, b) => a - b);
  let count = 0;
  let temp = 0;
  while (!checkArray(arr, sorted)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        count++;
        break;
      }
    }
  }
  return count;
}

function checkArray(arr, sorted) {
  console.log("Array is " + arr);
  console.log("sorted is " + sorted);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], sorted[i]);
    if (arr[i] != sorted[i]) {
      console.log("Returning false");
      return false;
    }
  }
  console.log("Returning true");
  return true;
}
console.log(minimumSwaps([2, 4, 3, 5, 1]));
