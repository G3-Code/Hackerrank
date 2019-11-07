function getSecondLargest(nums) {
  // Complete the function
  let distinctNumbers = [...new Set(nums.map(x => x))];
  let sortedList = distinctNumbers.sort((a, b) => {
    return b - a;
  });
  return sortedList[1];
}

console.log(getSecondLargest([2, 5, 6, 3, 4, 7]));
