function findUniqueArray(arr) {
  let uniqueArr = [];
  uniqueArr.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

function shortestSubstring(s) {
  // Find the unique values in the string
  let uniqueArr = findUniqueArray(s);
  console.log(uniqueArr);
}
console.log(shortestSubstring("testingstrings"));
