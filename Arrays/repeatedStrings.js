// Complete the repeatedString function below.
function repeatedString(s, n) {
  if (s.length < n) {
    if(!(s.match(/a/gi))){
      return 0;
    }
  let stringLength = s.length;
  let numOfTimes = Math.floor(n/ stringLength);
  if (numOfTimes === n) {
    return n;
  }
  let numberOfAs = (s.match(/a/gi)).length * numOfTimes;

  let numOfLetters = n - (s.length * numOfTimes);
  if ((s.slice(0,numOfLetters)).match(/a/gi)) {
  numberOfAs += ((s.slice(0,numOfLetters)).match(/a/gi)).length;
  }

  return numberOfAs;
} else {
  if ((s.slice(0,n)).match(/a/gi)){
    return (s.slice(0,n)).match(/a/gi).length;
  } else {
    return 0;
  }
}
}

console.log(repeatedString('bcde',10));


//   let tempArr = [];
//   let stringArr = s.split('');
//   let count = 0;
//   let i = 0;
//   if (stringArr.length === 1) {
//     return n;
//   } else {
//   while(count < n){
//     tempArr[count] = stringArr[i];
//     if (i === (stringArr.length-1)){
//       i = 0;
//     } else {
//       i++;
//     }
//     count ++;
//   }
//   return tempArr.filter(val => {
//     return val==='a';
//   }).length;
// }
