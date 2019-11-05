function processData(input) {
    //Enter your code here
  let numberOfWords = input[0];
  for (let i=0; i< numberOfWords ; i++){
      console.log(stringSplit(input[i+1]));
  }
}

function stringSplit(word){
    let wordLen = word.length;
    let oddStr = word.substr(1,1);
    let evenStr = word.substr(0,1);
    for (let i=2; i<wordLen; i++){
        if (i%2 === 0) {
            evenStr = evenStr.concat(word.substr(i,1));
        } else {
            oddStr = oddStr.concat(word.substr(i,1));
        }

    }
    //console.log(evenStr, oddStr);
    return evenStr.concat("  ").concat(oddStr);
}
