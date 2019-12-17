function shortestSubstring(s) {
  // Write your code here
  if (s.length === 1) {
    return 1;
  }
  if (s.length === 0) {
    return 0;
  }
  let resultArr = [];
  console.log(`The string is - ${s}`);

  // Get the unique letters in the string
  let uniqueSetSize = new Set(s.split("")).size;
  console.log(`Unique set size is ${uniqueSetSize}`);
  //Note: The substring has to be atleast 11 digits long.
  // Loop through the string to find when a sub-string has all letters
  let startPoint = 0;
  let endPoint = uniqueSetSize;
  let subStringVal = "";
  while (
    startPoint < s.length + 1 - uniqueSetSize &&
    endPoint <= s.length + 1
  ) {
    //console.log(`start point is ${startPoint} and end point is ${endPoint}`);
    subStringVal = s.substring(startPoint, endPoint);
    let subStringUniqSetSize = new Set(subStringVal.split("")).size;

    // checks if all the unique set is avaialble
    if (subStringUniqSetSize === uniqueSetSize) {
      console.log(subStringVal, subStringVal.length);
      resultArr.push(subStringVal.length);
      startPoint++;
      endPoint = startPoint + uniqueSetSize;
    } else {
      endPoint = endPoint + (uniqueSetSize - subStringUniqSetSize);
    }
  }
  // compare the lengths of the substring
  // return the length of the shortest substring
  resultArr.sort();
  return resultArr[0];
}

// function shortestSubstring(s) {
//   let uniqueSet = [];
//   for (let i of s.split("")) {
//     if (!uniqueSet.includes(i)) {
//       uniqueSet.push(i);
//     }
//   }
//   console.log(uniqueSet);
//   let startPoint = 0;
//   let endPoint = uniqueSet.length;
//   console.log(endPoint);
// }
console.log(shortestSubstring("Testing strings"));
console.log(shortestSubstring("bab"));
