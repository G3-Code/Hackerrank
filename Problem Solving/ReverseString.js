function reverseString(s) {
  try {
    s = s
      .split("")
      .reverse()
      .toString()
      .replace(/,/g, "");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(s);
  }
}

reverseString(1234);
