"use strict";
// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
  let temp = 0;
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < arr.length; i++) {
      let j = i + 1;
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        isSwapped = true;
        console.log(arr);
        break;
      }
    }
  }
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);
