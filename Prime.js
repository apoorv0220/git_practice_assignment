let n=57
for (let i=1; i<=57/6; i++) {
    for(let j=1; j<=i/6; j++) {
      if(i===2 || i===3 || i===6*j+1 || i===6*j+1) {
        console.log("Prime")
      } else {console.log("Composite")}
    }
}