function slowestKey(keyTimes) {
  // Write your code here
  let alphabets = [];
  let timeTaken = [];
  alphabets.push(keyTimes[0][0]);
  timeTaken.push(keyTimes[0][1]);
  for (let i = 1; i < keyTimes.length; i++) {
    alphabets.push(keyTimes[i][0]);
    timeTaken.push(keyTimes[i][1] - keyTimes[i - 1][1]);
  }

  let resultArr = new Array(2);
  for (let i = 0; i < keyTimes.length; i++) {
    resultArr[i] = new Array(2);
  }
  for (let i = 0; i < keyTimes.length; i++) {
    resultArr[i][0] = alphabets[i];
    resultArr[i][1] = timeTaken[i];
  }
  resultArr.sort(sortByColumnDesc);
  return String.fromCharCode(97 + resultArr[0][0]);
}

function sortByColumnDesc(a, b) {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return a[1] > b[1] ? -1 : 1;
  }
}

console.log(
  slowestKey([
    [0, 2],
    [1, 3],
    [0, 7]
  ])
);
