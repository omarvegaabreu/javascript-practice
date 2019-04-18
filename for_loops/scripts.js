//mistake you can use i on every loop because you are not nesting the loops... !

// console.log(" 'FOR LOOP' PRINT ALL THE NUMBERS BETWEEN -10 AND 19");

// for (var i = -10; i <= 19;i++ ) {
//   console.log(i);
// }

// console.log("'FOR LOOP:' PRING ALL EVEN NUMBERS BETTWEEN 10 AND 40");

// for (j = 10; j <= 40; j++) {
//   if (j % 2 === 0) {
//     console.log(j);
//   }
// }

// console.log("FOR LOOP PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")

// for (k = 300; k <= 333; k++) {
//   if (k % 2 !== 0) {
//     console.log(k);
//   }
// }


// console.log("FOR LOOP PRINT NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50")

// for (l = 5; l <= 50; l++) {
//   if (l % 5 === 0 && l % 3 === 0) {
//     console.log(l)
//   }
// }

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

var john = ['jose', 'maria ', 'minerva ', 24, true, false, 'ok'];

for (i = 0; i < john.length; i++) {
  console.log(john[i]);
}

for (i = 0; i < john.length; i++) {
  //using conditionals inside a loop
  if (typeof john[i] !== 'string') continue; 
  //continue will not print what ever you ask and will continue with the loop
  console.log(john[i]);
}

for (i = 0; i < john.length; i++) {
  //using conditionals inside a loop
  if (typeof john[i] !== 'string') break;
  //break will not print what ever you ask and will break out of loop
  console.log(john[i]);
}
//will loop backwards
for (i > 0; i = john.length; i--) {
  console.log(i);
}




