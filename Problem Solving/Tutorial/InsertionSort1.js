// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
  let temp = arr[n - 1];
  for (let i = n - 1; i > -1; i--) {
    if (i == n - 1) {
      arr[i] = arr[i - 1];
      console.log(arr.toString().replace(/,/g, " "));
      continue;
    }

    if (temp < arr[i - 1]) {
      arr[i] = arr[i - 1];
      console.log(arr.toString().replace(/,/g, " "));
    } else {
      arr[i] = temp;
      console.log(arr.toString().replace(/,/g, " "));
      break;
    }
  }
}

insertionSort1(5, [2, 4, 6, 8, 3]);
