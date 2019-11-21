function oddNumbers(l, r) {
  resultArr = [];
  for (let i = l; i < r + 1; i++) {
    if (!(i % 2 == 0)) {
      resultArr.push(i);
    }
  }
  return resultArr;
}

console.log(oddNumbers(3, 9));
