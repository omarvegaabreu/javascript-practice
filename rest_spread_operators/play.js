/**
 * Understanding rest and spread operators
 */
const hobbies = ["Sports", "Cooking"];

//how to copy array

// to copy array
const copiedArray = hobbies.slice();
console.log("Copied array: " + copiedArray);

const copyWithSpreadOperator = [...copiedArray];
console.log("Copied with spread operator:" + copyWithSpreadOperator);

const person = {
  name: "Omar",
  age: 37,
  greeting() {
    console.log("Hi I am " + this.name);
  }
};
//spread operator
const copiedObject = { ...person };
console.log("Using spread operator: " + copiedObject);

//rest operator
start = Date.now;

const toArray = (...args) => {
  return args;
};

end = Date.now;
console.log(end - start);
console.log(toArray(1, 2, 3, 4, 5, 6, 7));
