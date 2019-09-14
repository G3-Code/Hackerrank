// Get the unique items in an array. Where ar is the array.

const distinctNums = [...new Set(ar)];

const array = [
  {"name":"joe", "age":17},
  {"name":"bob", "age":17},
  {"name":"tom", "age":35}
];
const distinctAges = [...new Set(array.map(x => x.age))];
