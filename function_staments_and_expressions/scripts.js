/***
 * Function statement and expression
 */

 /**
  * function declaration

  * 
  * function whatDoYouDo(argument, argument2) {

  }
  *
  */

  /**
   * Function expression:
   * expression will always return a value, or an immediate result. 
   */


var whatDoYouDo = function (job, firstName) {
  
  switch (job) {
    case 'teacher':
      return firstName + ' teaches people how to code'; 
    case 'driver':
      return firstName + ' drives uber part time';
    case 'designer':
      return firstName + ' builds awesome websites.';
    default:
      return firstName + ' does something else. ';     
  }
 
}
console.log (whatDoYouDo('teacher', 'John'));
console.log (whatDoYouDo('driver', 'Jane'));
console.log (whatDoYouDo('designer', 'Jose'));
console.log(whatDoYouDo('retired', 'Mike'));


