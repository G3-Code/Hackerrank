function getMaxLessThanK(n, k) {
  let max = 0;
  let c = 0;

  for (let a = 1; a < n; a++) {
    for (let b = a + 1; b < n + 1; b++) {
      c = a & b;
      if (c < k) {
        if (c > max) {
          max = c;
        }
      }
    }
  }
  return max;
}

console.log(getMaxLessThanK(5, 2));
console.log(getMaxLessThanK(8, 5));
console.log(getMaxLessThanK(2, 2));
console.log(getMaxLessThanK(9, 2));
console.log(getMaxLessThanK(8, 3));
