// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  let annaBill =
    (bill.reduce((p, n) => {
      return p + n;
    }, 0) -
      bill[k]) /
    2;
  if (annaBill === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaBill);
  }
}

bonAppetit([3, 10, 2, 9], 1, 12);
