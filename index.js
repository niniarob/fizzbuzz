

// if the number divides 3 console fizz, 
// if the number divides 5 console buzz, 
// if the number divides 3 and 5 consol fizzbuzz,
//  else console all number between 1 to 100.  
// (while && for)

let x = 1;

while (x <= 100) {
  let fzb = "";
  if (x % 3 === 0) {
    fzb+= "fizz";
  }
  if (x % 5 === 0) {
    fzb += "buzz";
  }
  if (fzb === "") {
    console.log(x);
  } else {
    console.log(fzb);
  }
  x++;
}

// for (let x = 1; x <= 100; x++) {
//     let fzb = "";
   
//     if (x % 3 === 0 ) {
//      fzb += "fizz";
//     }
//      if(x % 5 === 0){
//       fzb += "buzz"
//     }
    
//     console.log(fzb || x );
//   }