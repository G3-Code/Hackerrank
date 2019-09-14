// Complete the rotLeft function below.
function rotLeft(a, d) {
  let rotatedArr = [];
  let tempArr = [];
  for (let i=d;i<a.length;i++){
    rotatedArr.push(a[i]);
  }
  for (let i=0;i<d;i++){
    rotatedArr.push(a[i]);
  }
  return(rotatedArr);
}

console.log(rotLeft([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]
