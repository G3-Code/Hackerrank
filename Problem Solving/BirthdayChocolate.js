// Complete the birthday function below.
function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let day = 0;
    for (let j = 0; j < m; j++) {
      day = day + s[j + i];
    }
    if (day === d) {
      count = count + 1;
    }
  }
  return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
