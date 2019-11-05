// Complete the plusMinus function below.
function plusMinus(arr) {
  let arrLen = arr.length;
  let posCnt = 0;
  let negCnt = 0;
  let zeroCnt = 0;
  for (let i = 0; i < arrLen; i++) {
    if (arr[i] > 0) {
      posCnt++;
    } else if (arr[i] < 0) {
      negCnt++;
    } else {
      zeroCnt++;
    }
  }

  posCnt != 0
    ? console.log((posCnt / arrLen).toFixed(6))
    : console.log("0.000000");
  negCnt != 0
    ? console.log((negCnt / arrLen).toFixed(6))
    : console.log("0.000000");
  zeroCnt != 0
    ? console.log((zeroCnt / arrLen).toFixed(6))
    : console.log("0.000000");
}

plusMinus([-4, 3, -9, 0, 4, 1]);
