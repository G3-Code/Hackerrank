// Complete the breakingRecords function below.
function breakingRecords(scores) {
  let highScore = scores[0];
  let lowScore = scores[0];
  let highBrk = 0;
  let lowBrk = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < lowScore) {
      lowBrk++;
      lowScore = scores[i];
    } else if (scores[i] > highScore) {
      highBrk++;
      highScore = scores[i];
    }
  }
  return [highBrk, lowBrk];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
