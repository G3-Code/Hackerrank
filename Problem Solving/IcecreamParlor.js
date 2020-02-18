// Complete the icecreamParlor function below.
function icecreamParlor(m, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(m - arr[i])) {
      let val = arr[i];
      arr[i] = 0;
      console.log(arr);
      return [i + 1, arr.findIndex(ar => ar === m - val) + 1];
    }
  }
}

console.log(icecreamParlor(4, [1, 4, 5, 3, 2]));
console.log(icecreamParlor(4, [2, 2, 4, 3]));
