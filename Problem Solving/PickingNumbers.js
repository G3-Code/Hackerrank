function pickingNumbers(a) {
  // Write your code here
  a.sort();
  const distinctNums = [...new Set(a)];
  let temp = [];
  let lenA = [];
  let lenB = [];
  for (let i = 0; i < distinctNums.length; i++) {
    lenA = a.filter(a => a === distinctNums[i]);
    lenB = a.filter(a => a === distinctNums[i + 1]);
    temp.push(lenA.length);
    temp.push(lenB.length);
    if (Math.abs(distinctNums[i] - distinctNums[i + 1]) === 1) {
      temp.push(lenA.concat(lenB).length);
    }
  }
  temp.sort(function(a, b) {
    return b - a;
  });
  return temp[0];
}

console.log(pickingNumbers([5, 5, 7, 5, 5, 5]));
