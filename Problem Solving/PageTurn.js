function pageCount(n, p) {
  /*
   * Write your code here.
   */
  let middle = Math.floor(n / 2);
  if (p > middle) {
    turns = Math.floor((n - p) / 2);
  } else {
    turns = Math.floor(p / 2);
  }
  if (!(n & 1) && p + 1 === n && n > 2) {
    return 1;
  }
  return turns;
}

// console.log(pageCount(6, 6));
// console.log(pageCount(6, 5));
// console.log(pageCount(6, 4));
// console.log(pageCount(6, 3));
// console.log(pageCount(6, 2));
console.log(pageCount(2, 1));
console.log(pageCount(7, 4));
