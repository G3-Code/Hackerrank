// Complete the hurdleRace function below.
function hurdleRace(k, height) {
  height.sort(function(a, b) {
    return b - a;
  });
  let diff = height[0] - k;
  if (diff > 0) return diff;
  else return 0;
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
