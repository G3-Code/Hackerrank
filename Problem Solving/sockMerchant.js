
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let pairs = 0;
  if (n===0){
    return 0;
  } else {
    ar.sort();
    const distinctNums = [...new Set(ar)];
    let temp = [];
    distinctNums.forEach(num => {
      temp = ar.filter(a => {
        return a === num;

      })
      pairs = pairs + Math.floor(temp.length/2);
    })
return pairs;
}
}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]))
