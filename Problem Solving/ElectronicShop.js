function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let temp = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        if (keyboards[i] + drives[j] > temp) {
          temp = keyboards[i] + drives[j];
        }
      }
    }
  }
  return temp;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
