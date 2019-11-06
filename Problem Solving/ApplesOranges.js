// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // apples
  var applesRange = [];
  apples.forEach(apple => {
    applesRange.push(a + apple);
  });
  var samsApples = applesRange.filter(apple => {
    if (apple >= s && apple <= t) {
      return apple;
    }
  });
  console.log(samsApples.length);

  // oranges
  var orangesRange = [];
  oranges.forEach(orange => {
    orangesRange.push(b + orange);
  });
  var samsOranges = orangesRange.filter(orange => {
    if (orange >= s && orange <= t) {
      return orange;
    }
  });
  console.log(samsOranges.length);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
