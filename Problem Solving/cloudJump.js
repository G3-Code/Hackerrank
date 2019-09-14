

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {

let jumps = 0;
if (c.length){
  let i=0;
  while (i<(c.length-1)){
    if ((c[i] === c[i+1]) && (c[i+1] === c[i+2]) && (c[i] === 0)){
      jumps ++;
      i = i+2;
    } else if ((c[i] === 0) && (c[i+1] === 1)){
      jumps ++;
      i = i+2;
    } else {
      jumps ++;
      i++;
    }
  }
} else {
  return 0;
}
return jumps;
}

console.log(jumpingOnClouds([0,0,0,0,1,0]));
