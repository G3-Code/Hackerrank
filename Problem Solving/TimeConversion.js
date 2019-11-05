/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  /*
   * Write your code here.
   */

  let isAM = true;
  if (s.endsWith("PM")) {
    isAM = false;
    s = s.replace("PM", "");
  } else {
    s = s.replace("AM", "");
  }
  let arr = s.split(":");
  if (!isAM && parseInt(arr[0]) != 12) {
    arr[0] = parseInt(arr[0]) + 12;
  } else if (isAM) {
    if (parseInt(arr[0]) === 12) {
      arr[0] = "00";
    }
  }
  //   console.log(arr.toString().replace(/,/g, ":"));
  return arr.toString().replace(/,/g, ":");
}

console.log(timeConversion("12:45:54PM"));
