// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
  let resultDate = "";
  if (year === 1918) {
    resultDate = "26.09.1918";
    return resultDate;
  }
  if (year < 1918) {
    if (year % 4 === 0) {
      resultDate = "12.09." + year;
    } else {
      resultDate = "13.09." + year;
    }
  } else if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
      resultDate = "12.09." + year;
    } else {
      resultDate = "13.09." + year;
    }
  }
  return resultDate;
}

console.log(dayOfProgrammer(2100));
