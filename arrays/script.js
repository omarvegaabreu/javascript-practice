/***
 * Arrays
 */


 //initializing arrays
var names = ['john', 'mark', 'jane'];
var years = new Array(1990, 1969, 1948);//another way of doing arrays

//mutate array data
names[1] = 'ben';
names[names.length] = 'mary';//will add element to the array in the last spot
console.log(names);

var john = ['john', 'smith', 1990, 'teacher', false];

john.push('blue');// push  will add element to the end of the array
john.unshift('Mr.'); //unshift will add element to the beguining of the array
john.pop();//pop will remove element from the array
john.shift();//shit will remove element fromt the beguining of the array
john.indexOf()// will let you know in which index an element is in the array. if unshit = -1 the element is not in the array.
console.log(john);

john.push('designer');// push method to add element to variable, will change the result of ternary
var isDesigner = john.indexOf('designer') === -1 ? 'john is NOT a designer' : 'john IS a designer';
//use of ternary in a variable to check if element is in variable.
console.log(isDesigner);



