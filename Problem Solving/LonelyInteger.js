// Complete the lonelyinteger function below.
function lonelyinteger(a) {
  let objNew = {};
  for (let i = 0; i < a.length; i++) {
    if (objNew[a[i]]) {
      delete objNew[a[i]];
    } else {
      objNew[a[i]] = 1;
    }
  }
  return Object.keys(objNew)[0];
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
