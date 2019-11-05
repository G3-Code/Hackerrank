// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  ar.sort((a, b) => b - a);
  let newAr = ar.filter(a => {
    return a === ar[0];
  });
  console.log(newAr.length);
}

birthdayCakeCandles([3, 1, 2, 3]);
