function kangaroo(x1, v1, x2, v2) {
  let willMeet = "NO";
  while (x1 <= 30000000 || x2 <= 30000000) {
    console.log(x1);
    console.log(x2);
    if (x1 === x2) {
      willMeet = "YES";
      break;
    } else {
      x1 += v1;
      x2 += v2;
    }
  }

  return willMeet;
}

console.log(kangaroo(2081, 8403, 9107, 8400));
