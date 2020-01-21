function catAndMouse(x, y, z) {
  let distA = Math.abs(z - x);
  let distB = Math.abs(z - y);
  if (distA < distB) {
    return "Cat A";
  } else if (distA > distB) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

console.log(catAndMouse(1, 3, 2));
