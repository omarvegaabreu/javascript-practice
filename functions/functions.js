// function greet(person1, person2,person3) {
//   console.log("hi " + person1);
//   console.log("hi " + person2);
//   console.log("hi " + person3);

// };

// greet("harry", "ron", "Hermaione");

// function test(x,y) {
//   return y - x;

// }

// test(10, 40);

// function test(x) {
//   return x * 2;
//   console.log(x);
//   return x / 2;
// }
// test(40); // it only returns 80 because functions take one input and give one output

/***
 * isEven()
 * 
 * write a function isEven() which take a single numeric argument
 * and returns true if the number is even, and false otherwise.
 */

var isEven = function (number) {
  if (number % 2 === 0) {
    return "Is even!";
  } else {
    return "false";
  }
}
isEven(5)


 /***
  * factorial()
  * 
  * write a function factorial() which takes a single numeric argument
  * and returns the factorial of that number
  */

function factorial(num) {
//define result variable
  var result=1
//calculate factorial and store value in result
  for (i = 2; i <= num; i++) {
    result *= i;
  }
//return the result variable
  return result;
}

/***
 * kebabToSnake()
 * 
 * write a function kebabToSnake which takes a single kebab-cased
 * string argument and returns the snake_cased version
 * replace "-" with "_" 
 */

function kebabToSnake(str) {
   //replace all '-' with '_'
  var newStr = str.replace(/-/g, "_");
  //return str
  return newStr;
 }