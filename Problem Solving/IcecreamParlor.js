// Complete the icecreamParlor function below.
function icecreamParlor(m, arr) {
  let costMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let balance = m - arr[i];
    if (costMap.has(balance)) {
      // result available
      return [costMap.get(balance), i + 1];
    } else {
      // add to map
      costMap.set(arr[i], i + 1);
    }
  }
}

//console.log(icecreamParlor(100, [5, 75, 25]));
//console.log(icecreamParlor(200, [150, 24, 79, 50, 88, 345, 3]));
console.log(icecreamParlor(8, [2, 1, 9, 4, 4, 56, 90, 3]));
// console.log(icecreamParlor(4, [2, 2, 4, 3]));
