let str="abcdefds"
let test="";
  
  for(let i = str.length-1; i >= 0; i--) {
      test += str[i];
  }
  
  (test == str) ? console.log("Yes"): console.log("No");