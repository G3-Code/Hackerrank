//Complete the pairs function below.
// function pairs(k, arr) {
//   arr.sort();
//   console.log(`sorted array is ${arr}`);
//   let diffArr = [];
//   let count = 0;
//   for (let i = 0, l = arr.length - 1; i < l; i++) {
//     diffArr.push(arr[i + 1] - arr[i]);
//     // console.log(diffArr);
//     var tempCount = 0;
//     for (var j = diffArr.length; j > 0; j--) {
//       tempCount = tempCount + diffArr[j - 1];
//       //   console.log(
//       //     `tempcount is ${tempCount} and diffArr of ${j - 1} is ${diffArr[j - 1]}`
//       //   );
//       if (tempCount === k || (tempCount === k && diffArr[j - 1] === 0)) {
//         count += 1;
//         // console.log(`Count is ${count}`);
//         if (diffArr[j - 2] != 0) {
//           break;
//         }
//       }
//     }
//   }
//   return count;
// }

function paris(k, arr) {
  let mySet = new Set(arr.map(el => el));
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i] + k)) {
      count++;
    }
  }
  return count;
}

console.log(paris(2, [1, 1, 3, 5, 8, 6, 4, 2]));
