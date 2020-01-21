function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  keyboards.sort();
  drives.sort();
  console.log(keyboards, drives);
  if (keyboards[0] + drives[0] > b) {
    return -1;
  } else {
    let maxVal = 0;
    let temp = 0;
    for (let i = keyboards.length - 1; i > -1; i--) {
      for (let k = drives.length - 1; k > -1; k--) {
        temp = keyboards[i] + drives[k];
        console.log(keyboards[i], drives[k]);
        if (temp <= b && temp > maxVal) {
          maxVal = temp;
        }
      }
    }
    return maxVal;
  }
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
