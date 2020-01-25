function beautifulDay(a, b, c) {
  //Loop from a to b
  let temp = a;
  let resultArr = [];
  while (temp < b + 1) {
    let newTemp = parseInt(
      temp
        .toString()
        .split("")
        .reverse()
        .toString()
        .replace(/,/g, "")
    );

    if (Math.abs(temp - newTemp) % c === 0) {
      resultArr.push(temp);
    }
    temp = temp + 1;
  }
  console.log(resultArr);
  return resultArr.length;
}
