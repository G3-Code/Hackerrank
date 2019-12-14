// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  // Iterate the array and count the number of arrays
  // Use two dimentional array to have the bird id and their value
  // sort the array based on the value count
  // return the first value from the sorted array
  let birds_count = {};
  for (let i = 0, arr_len = arr.length; i < arr.length; i++) {
    if (arr[i] in birds_count) {
      birds_count[arr[i]] += 1;
    } else {
      birds_count[arr[i]] = 1;
    }
  }
  let mig_birds = [];
  for (let id in birds_count) {
    mig_birds.push([id, birds_count[id]]);
  }

  mig_birds.sort((a, b) => {
    return b[1] - a[1];
  });
  return mig_birds[0][0];
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
