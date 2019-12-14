function deleteProducts(ids, m) {
  let cache = {};

  for (let i = 0; i < ids.length; i++) {
    if (cache[ids[i]]) {
      cache[ids[i]] += 1;
    } else {
      cache[ids[i]] = 1;
    }
  }

  // convert the object into two dimentional array
  let cache2D = [];
  for (let id in cache) {
    cache2D.push([id, cache[id]]);
  }

  //Sorting the 2D array
  cache2D.sort(function(a, b) {
    return a[1] - b[1];
  });

  // Go through the 2D array and try to remove m elements from that.
  for (let id = 0; id < cache2D.length; id++) {
    if (cache2D[id][1] <= m) {
      // the whole product could be sold for that id
      // this  id will need to be removed from cache2D
      m = m - cache2D[id][1];
      cache2D.splice(id, 1);
      id = id - 1;
    } else {
      if (m != 0) {
        let temp = m;
        m = m - cache2D[id][1];
        cache2D[id][1] = cache2D[id][1] - temp;
      }
      if (cache2D[id][1] === 0) {
        cache2D.splice(id, 1);
        id = id - 1;
      }
      if (m <= 0) {
        break;
      }
    }
  }
  return cache2D.length;
}

// function deleteProducts(ids, m){
//     // Determine how many unique ids are in the bag
//     // * create an object the keys are the ids and values are the count
//     // How many can we remove in m turns
//     // * sort the objects by its value
//     // Remove the smallest value

// }

console.log(deleteProducts([1, 1, 1, 2, 3, 2], 2));
