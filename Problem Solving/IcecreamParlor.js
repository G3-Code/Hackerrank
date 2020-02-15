// Complete the icecreamParlor function below.
export default function icecreamParlor(m, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(m - arr[i])) {
      return [i + 1, arr.findIndex(ar => ar === m - arr[i])];
    }
  }
}
