function viralAd(n) {
  let a = 5;
  let result = 0;
  for (let i = 0; i < n; i++) {
    let l = Math.floor(a / 2);
    result = result + l;
    a = l * 3;
  }
  return result;
}
