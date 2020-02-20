// Complete the icecreamParlor function below.
function icecreamParlor(m, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(m - arr[i])) {
      let val = arr[i];
      arr[i] = 0;
      return [i + 1, arr.findIndex(ar => ar === m - val) + 1];
    }
  }
}

//console.log(icecreamParlor(100, [5, 75, 25]));
//console.log(icecreamParlor(200, [150, 24, 79, 50, 88, 345, 3]));
console.log(icecreamParlor(8, [2, 1, 9, 4, 4, 56, 90, 3]));
// console.log(icecreamParlor(4, [2, 2, 4, 3]));
