"use strict";
// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
  let temp = 0;
  let isSwapped = true;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let item = arr.splice(i, 1);
        arr.splice(j, 0, item[0]);
        break;
      }
    }
    console.log(arr.toString().replace(/,/g, " "));
  }
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);
