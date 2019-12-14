function numberOfWays(queries) {
  // Write your code here
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    result.push(getWays(queries[i]));
  }
  console.log(result);
}

function getWays(arrayVal) {
  let num = arrayVal[0] > arrayVal[1] ? arrayVal[1] : arrayVal[0];
  let a = arrayVal[0];
  let b = arrayVal[1];
  let count = 0;
  for (let i = num; i > 0; i--) {
    count = count + a * b;
    a--;
    b--;
  }
  return count;
}

console.log(
  numberOfWays([
    [2, 1],
    [2, 3]
  ])
);
