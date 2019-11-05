function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 37) {
      if (grades[i] % 5 > 2) {
        grades[i] = Math.ceil(grades[i] / 5) * 5;
      }
    }
  }
  console.log(grades);
}

gradingStudents([73, 67, 38, 33]);
