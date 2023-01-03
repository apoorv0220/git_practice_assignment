let str="abcdefds"
let test="";
  
  for(let i = str.length; i >= 0; i--) {
      test += str[i];
  }
  
  (test == str) ? console.log("Yes"):
  console.log("No");